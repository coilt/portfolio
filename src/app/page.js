'use client'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Lenis from '@studio-freight/lenis'
import './page.module.css'
import CardsSlider from './components/flipcards/CardsSlider'
import FlipCards from './components/flipcards/FlipCards.jsx'

import Card1 from '../../public/card_01.jpg'
import Card2 from '../../public/card_02.jpg'
import Card3 from '../../public/card_03.jpg'
import Card4 from '../../public/card_04.jpg'
import Card5 from '../../public/card_05.jpg'

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
        <title>Portfolio Site</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        
        <FlipCards />
         
      </main>
    </div>
  )
}
