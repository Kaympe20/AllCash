FROM node:20-alpine

WORKDIR /app

COPY package.json bun.lock ./
RUN npm install

COPY . .

RUN npm run build

ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]