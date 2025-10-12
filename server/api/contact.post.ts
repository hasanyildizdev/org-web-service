export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer()
  const body = await readBody(event)
  const { name, email, topic, message } = body
  const config = useRuntimeConfig()

  // Basic validation
  if (!name || !email || !message) {
    event.res.statusCode = 400
    return { error: 'Missing required fields' }
  }

  try {
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
    await sendMail({
      to: config.public.contactEmail,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
    })

    return { success: true, message: 'Email sent successfully' }
  } catch (err) {
    console.error('❌ Error sending email:', err)
    event.res.statusCode = 500
    return { error: 'Failed to send email. Please try again later.' }
  }
})
