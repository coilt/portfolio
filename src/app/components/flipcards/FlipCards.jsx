import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Card1 from './card_01.jpg';
import Card2 from './card_02.jpg';
import './PortfolioComponent.css';

export default function FlipCard() {
  const portfolioRef = useRef(null);
  const portfolioRef2 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(portfolioRef.current, {
      visibility: 'visible',
      xPercent: 100,
      yPercent: 100,
      filter: 'blur(0px)',
    });
    gsap.set(portfolioRef2.current, {
      visibility: 'visible',
      xPercent: 100,
      yPercent: 100,
      filter: 'blur(0px)',
    });
    gsap.to(portfolioRef.current, {
      scale: 0.8,
      x: '-1%',
      filter: 'blur(20px)', // Apply blur effect
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: 'top 5%',
        end: '+=2000',
        markers: false,
        pin: true,
        pinType: 'fixed',
        scrub: true,
        ease: 'power1.out',
      },
    });
    gsap.to(portfolioRef2.current, {
      scale: 0.8,
      x: '-1%',
      filter: 'blur(20px)', // Apply blur effect
      scrollTrigger: {
        trigger: portfolioRef2.current,
        start: 'top 5%', // Start the second animation when the first one is at 5%
        end: '+=2000',
        markers: false,
        pin: true,
        pinType: 'fixed',
        scrub: true,
        ease: 'power1.out',
      },
    });
  }, []);

  return (
    <>
      <div ref={portfolioRef} className='portfolio'>
        <Image src={Card1} alt='Portfolio' fill />
      </div>
      <div ref={portfolioRef2} className='portfolio'>
        <Image src={Card2} alt='Portfolio' fill />
      </div>
    </>
  );
}