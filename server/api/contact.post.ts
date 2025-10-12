import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, topic, message } = body
  const config = useRuntimeConfig()

  // Basic validation
  if (!name || !email || !message) {
    event.res.statusCode = 400
    return { error: 'Missing required fields' }
  }
  
  try {
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: Number(config.smtpPort),
      secure: true,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass
      },
      tls: { rejectUnauthorized: false },
    })

    // Build the email content
    const mailSubject = topic
      ? `New ${topic} message from ${name}`
      : `New message from ${name}`

    const mailText = `
You received a new message from your website contact form.

Name: ${name}
Email: ${email}
Topic: ${topic || 'N/A'}

Message:
${message}
    `.trim()

    const mailHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Topic:</strong> ${topic || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Send email via configured SMTP (Zoho in your case)
    await transporter.sendMail({
      from: config.smtpUser,
      to: config.smtpUser, // Send to yourself
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
    })

    return { success: true, message: 'Email sent successfully' }
  } catch (err) {
    console.log('🟢 SMTP config:', {
      host: config.smtpHost,
      port: config.smtpPort,
      user: config.smtpUser,
      pass: config.smtpPass
    })
    console.error('❌ Error sending email:', err)
    event.res.statusCode = 500
    return { error: 'Failed to send email. Please try again later.' }
  }
})
