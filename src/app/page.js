'use client'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Lenis from '@studio-freight/lenis'
import './page.module.css'
import CardsSlider from './components/flipcards/CardsSlider'

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
      <CardsSlider/>
        <nav>
          <div className='logo'>
            <a href='#'>Noir Woord</a>
          </div>

          <div className='pages'>
            <a href='#'>Films</a>
            <a href='#'>Production</a>
            <a href='#'>Info</a>
            <a href='#'>Contact</a>
          </div>

          <div className='shop'>
            <a href='#'>Search</a>
            <a href='#'>Account</a>
            <a href='#'>Cart</a>
          </div>
        </nav>

        <footer>
          <p>Showreel 2.0</p>
          <p>2024</p>
        </footer>
        <div className='container'>
          <div className='slider'>
            <div className='card'>
              <img src='/card_01.jpg' alt='Portfolio' />

              <div className='copy'>
                <h1>Future Echoes</h1>
              </div>
            </div>
            <div className='card'>
              <img src='/card_02.jpg' alt='Portfolio' />

              <div className='copy'>
                <h1>Neon Void</h1>
              </div>
            </div>
            <div className='card'>
              <img src='/card_03.jpg'  alt='Portfolio' />

              <div className='copy'>
                <h1>The Mystic River</h1>
              </div>
            </div>
            <div className='card'>
              <img src='/card_04.jpg' alt='Portfolio' />

              <div className='copy'>
                <h1>Secret Sanctuary</h1>
              </div>
            </div>
            <div className='card'>
              <img src='/card_05.jpg' alt='Portfolio' />

              <div className='copy'>
                <h1>Solemn Sky</h1>
              </div>
            </div>
          </div>
        </div>

       

      </main>

      <footer>{/* Footer content */}</footer>
    </div>
  )
}
