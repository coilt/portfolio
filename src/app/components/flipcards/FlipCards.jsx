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
      scale: 0.8,
      x: '-1%',
      filter: 'blur(20px)', // Apply blur effect
      scrollTrigger: {
        trigger: portfolio1Ref.current,
        start: 'top 5%',
        end: '+=2000',
        markers: false,
        pin: true,
        pinType: 'fixed',
        scrub: true,
        ease: "power1.out",
      },
    })

    gsap.set(portfolio2Ref.current, {
      visibility: 'visible',
      xPercent: 100,
      yPercent: 100,
      filter: 'blur(0px)',
    })
    gsap.to(portfolio2Ref.current, {
      scale: 0.8,
      x: '-1%',
      filter: 'blur(20px)', // Apply blur effect
      scrollTrigger: {
        trigger: portfolio2Ref.current,
        start: 'top 5%',
        end: '+=2000',
        markers: false,
        pin: true,
        pinType: 'fixed',

        scrub: 1,
        ease: "power1.out",
         
      },
    })
  }, [])

  return (
    <>
      <div className='wrapper'>
        <div ref={portfolio1Ref} className='portfolio'>
          <Image src={Card1} alt='Portfolio' fill />
        </div>
      </div>
      <div className='wrapper2'>
        <div ref={portfolio2Ref} className='portfolio2'>
          <Image src={Card2} alt='Portfolio' fill />
        </div>
      </div>
    </>
  )
}
