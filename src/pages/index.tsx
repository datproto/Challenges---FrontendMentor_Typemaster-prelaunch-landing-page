/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image';

const Home: NextPage = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>Frontend Mentor | Typemaster pre-launch landing page</title>
      <meta
        name="description"
        content="Frontend Mentor - Challenge | Typemaster pre-launch landing page"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="Frontend Mentor | Typemaster pre-launch landing page"
      />
      <meta
        property="og:description"
        content="Frontend Mentor - Challenge | Typemaster pre-launch landing page"
      />
      <meta property="og:image" content="/assets/preview.jpg" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
    </Head>

    <main>
      <div className="text-3xl font-bold underline">Main</div>
    </main>

    <footer>Footer</footer>
  </div>
);

export default Home;
