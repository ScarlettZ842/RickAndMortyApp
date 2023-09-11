This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install npm package:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with the browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## APP Introduction

- FEATURES:

1. This Mini App displays the character images and names from Rick and Morty animated sitcom.
2. Users can browse all the character content by selecting different page buttons set at the bottom of the webpage.

- DESIGN IDEAS & TECHNICAL STACKS:

1. The project uilized the Next.js, React.js and Typescript to create the app and demonstrate the components.
2. To style the components used @import url(//fonts.googleapis.com/earlyaccess/notosanskannada.css), the custom Google Font, to load and adjust elements style.
3. Splitted components into multiple components and wrote in several files to guarantee the code readability and maintenance efficiency.
4. SSR(Server Side Rendering) was implemented in the index.tsx file for no browser environment, 'document' and 'window' brower-specific objects were not used to interact with the DOM.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
