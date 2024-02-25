'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';
import ScrollCards from './components/scrollcards/ScrollCards';
import Lenis from '@studio-freight/lenis';


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })
  return (
    <div>
      <Head>
        <title>Scrolling Cards Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

       
        <ScrollCards />

 

      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}
