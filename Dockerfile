FROM oven/bun:alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN apk add --no-cache git
RUN bun install

COPY . .

ENV HOST=0.0.0.0
ENV MONGODB_URI=mongodb://mongodb:27017/allcash
RUN bun run build

FROM oven/bun:alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/bun.lock ./

ENV HOST=0.0.0.0
ENV MONGODB_URI=mongodb://mongodb:27017/allcash

EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]