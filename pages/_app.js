import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/typography.css";
import localFont from '@next/font/local';

const goodDog = localFont({
  src: [
    {
      path: '../fonts/GoodDog.otf',
      weight: '400'
    },
  
  ],
  variable: '--font-gooddog'
})

export default function App({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    AOS.init();
  }
  return (
    <>
      <Head>
        <title>Native Events</title>
        <link rel="icon" href="/img/tbot.svg" sizes="32x32" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <div className={`${goodDog.variable} font-sans`}>
        {Component?.layout ? (
          <Component.layout>
            <Component {...pageProps} />
          </Component.layout>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </>
  );
}
