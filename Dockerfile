FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

ENV HOST=0.0.0.0
ENV MONGODB_URI=mongodb://mongodb:27017/allcash

RUN bun run build

EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]