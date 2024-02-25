'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Card1 from './card_01.jpg'
import Card2 from './card_02.jpg'
import './PortfolioComponent.css'

export default function FlipCard() {
  const cardRef = useRef(null)
  const card1 = useRef(null) // Corrected to useRef(null)
  const portfolioRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(portfolioRef.current, { visibility: "visible", xPercent: 100, yPercent: 100, filter: "blur(0px)" });    
    gsap.to(portfolioRef.current, {
      scale: 0.4,
      x: '-1%',
      filter: 'blur(30px)', // Apply blur effect
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: 'top 10%',
        end: '+=2000',
        markers: true,
        pin: true,
        scrub: true,
      },
    })
  }, [])

  return (
    <>
    <div className='wrapper'>
      <div
        ref={portfolioRef}
        className='portfolio'
     
      >
        <Image src={Card1} alt='Portfolio' fill />
      </div>
      </div>
    </>
  )
}
