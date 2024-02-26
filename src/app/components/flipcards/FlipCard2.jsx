'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Card1 from './card_01.jpg'
import Card2 from './card_02.jpg'
import './PortfolioComponent.css'

export default function FlipCard2() {
  const cardRef = useRef(null)
  const card1 = useRef(null) // Corrected to useRef(null)
  const portfolio1Ref = useRef(null)
  const portfolio2Ref = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(portfolio1Ref.current, {
      visibility: 'visible',
      xPercent: 100,
      yPercent: 100,
      filter: 'blur(0px)',
    })
    gsap.to(portfolio1Ref.current, {
      scale: 0.4,
      x: '-1%',
      filter: 'blur(30px)', // Apply blur effect
      scrollTrigger: {
        trigger: portfolio1Ref.current,
        start: 'top 10%',
        end: '+=2000',

        pin: true,
        scrub: true,
      },
    })
  }, [])

  return (
    <>
      <div ref={portfolio1Ref} className='portfolio'>
        <Image src={Card2} alt='Portfolio' fill />
      </div>
    </>
  )
}
