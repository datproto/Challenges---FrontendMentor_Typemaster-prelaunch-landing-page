/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '@/partials/Navbar';
import Header from '@/partials/Header';
import Intro from '@/partials/Intro';
import Features from '@/partials/Features';

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
      <div id="content" className="flex flex-col gap-16 md:gap-20">
        <Navbar />
        <Header />
        <Intro />
        <Features />
      </div>

      <footer>
        <p className="flex gap-2 justify-center md:mt-[2.875rem] xl:mt-8">
          <span className="font-[900]">Typemaster 2021</span> |{' '}
          <span>All Rights Reserved</span>
        </p>
      </footer>
    </main>
  </div>
);

export default Home;
