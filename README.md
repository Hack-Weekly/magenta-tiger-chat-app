# Magenta Tiger Chat App

This is our Magenta Tiger Chat App 🐯 🎉
Visit on: https://magenta-tiger-chat-app.vercel.app/

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by `web`
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build client and server apps and packages, run the following command:

```
cd magenta-tiger-chat-app
npm run build

server:
cd server
npm run build
```

### Develop

To develop client and server apps and packages, run the following command:

```
cd magenta-tiger-chat-app
npm i
web: 
npm run dev

server:
cd server
npm run start:dev
```

## Useful Links


- [Turborepo](https://turbo.build/repo/docs)
