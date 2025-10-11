FROM --platform=linux/amd64 node:18 AS builder
WORKDIR /app

ENV NUXT_TELEMETRY_DISABLED=1

COPY package.json ./
RUN npm install --force && npm cache clean --force
COPY . .
RUN npm run build

# Stage 2: Run Nuxt in production
FROM --platform=linux/amd64 node:18-slim AS runner
WORKDIR /app
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev --force && npm cache clean --force
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
