FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

RUN bun run build

ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]