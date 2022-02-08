/* eslint-disable react/function-component-definition */
import Button from '@/components/button';
import Navbar from '@/components/navbar';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-16 xl:gap-32 md:items-center">
          {/* Content */}
          <div className="text flex flex-col gap-8 grow md:w-3/4 xl:w-1/2">
            <h1>typemaster keyboard</h1>
            <p>
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>
            <div className="flex items-center gap-8 xl:gap-10">
              <Button type="orange" customClass="flex-none">
                pre-order now
              </Button>
              <p className="font-[700] shrink-0 uppercase">Release on 5/27</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex w-96 h-80 md:w-[540px] md:h-[480px] md:-mr-16 xl:mr-0 after:hidden xl:after:block after:absolute after:p-24 after:bg-gray after:top-0 after:-right-[13.5rem] after:rounded-3xl">
            <div className="image grow h-full relative">
              <Image
                src="/assets/mobile/image-keyboard.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
                objectPosition="left center"
                className="rounded-[1.25rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p className="flex gap-2">
          <span className="font-[900]">Typemaster 2021</span> |{' '}
          <span>All Rights Reserved</span>
        </p>
      </footer>
    </main>
  </div>
);

export default Home;
