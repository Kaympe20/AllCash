# AllCash

<details open>
<summary>Background</summary>

> I came up with this idea as I was getting my dad to switch to open source tools to save money. I tried finding an open alternative to EveryDollar, and it stumped me. EveryDollar has so many users, yet there isn't even an open web-based budgeting app, let alone one that supports connecting with banking apps and/or receipts. **It is for this reason that I decided to make *AllCash*, the open source budgetting app to help you put all of your cash to work.**

</details>

<a href="https://slack.com/app_redirect?channel=U07HY92M9GA"><img src="https://hackatime-badge.hackclub.com/U07HY92M9GA/AllCash"></a>

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
docker pull mongodb/mongodb-community-server:latest
```

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## `.env` Setup

Prefill `.env` with absolutely nessecary variables
```bash
echo "mongodb://mongo:27017/your-db" > .env
```


## Development Server

Start the development server on `http://localhost:3000`:

```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
