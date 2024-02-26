import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Card1 from './card_01.jpg'
import './PortfolioComponent.css'

export default function FlipCard() {
  const portfolioRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl.fromTo(
      portfolioRef.current,
      { y: '100vh', visibility: 'visible', transformPerspective: 600, z: 0 },
      {
        z: 0,
        filter: 'blur(0px)',
        ease: 'none',
      }
    )

    const cardAnimation = gsap.to(portfolioRef.current, {
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: 'top 15%',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: true,
        onUpdate: (self) => {
          const zPosition = -1000 * self.progress
          gsap.set(portfolioRef.current, { z: zPosition })
        },
      },
      y: '200vh',
    })
  }, [portfolioRef.current])

  return (
    <>
      <div ref={portfolioRef} className='portfolio'>
        <Image src={Card1} alt='Portfolio' fill />
      </div>
    </>
  )
}
