import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Card1 from './card_01.jpg';
import './PortfolioComponent.css';

export default function FlipCard() {
  const portfolioRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial perspective, position, and blur
    gsap.set(portfolioRef.current, {
      y: '100vh', // Ensures the card starts just below the viewport
      visibility: 'visible',
      transformPerspective: 1000, // Adjust for depth effect
      z: 0, // Starting Z position
      filter: 'blur(0px)', // Start with no blur
    });

    ScrollTrigger.create({
      trigger: portfolioRef.current,
      start: 'top 15%', // Adjust as needed
      end: 'bottom top',
      scrub: true,
      pin: true,
      markers: true,
      onUpdate: (self) => {
        // Dynamically adjust the Z position and blur based on scroll progress
        const zPosition = -1000 * self.progress; // Move element in Z axis
        const blurAmount = 30 * self.progress; // Increase blur as the element "moves away"
        gsap.to(portfolioRef.current, {
          z: zPosition,
          filter: `blur(${blurAmount}px)`,
          ease: 'none',
        });
      }
    });
  }, []);

  return (
    <>
      <div ref={portfolioRef} className='portfolio'>
        <Image src={Card1} alt='Portfolio' fill />
      </div>
    </>
  );
}