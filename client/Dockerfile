FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache dumb-init
COPY --from=builder /app/public ./public
COPY --from=builder /app/ .next/standalone ./
COPY --from=builder /app./next/static ./.next/static
USER nobody
EXPOSE 3000
ENV NODE_ENV=production
ENTRYPOINT ["dumb-init","--"]
CMD ["node","server.js"]