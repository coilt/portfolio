import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

const CardsSlider = () => {
  const isAnimating = useRef(false);

  const initializeCards = () => {
    const cards = Array.from(document.querySelectorAll('.card'));
    gsap.to(cards, {
      y: (i) => `calc(-15% + ${15 * i}%)`,
      z: (i) => 15 * i,
      duration: 1,
      ease: CustomEase.create('cubic', '0.83, 0, 0.17, 1'),
      stagger: -0.1,
    });
  };

  useEffect(() => {
    initializeCards();

    gsap.set('h1 span', { y: -200 });
    gsap.set('.slider .card:last-child h1 span', { y: 0 });
  }, []);

  const handleClick = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const slider = document.querySelector('.slider');
    const cards = Array.from(slider.querySelectorAll('.card'));
    const lastCard = cards.pop();
    const nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll('h1 span'), {
      y: 200,
      duration: 0.75,
      ease: CustomEase.create('cubic', '0.83, 0, 0.17, 1'),
    });

    gsap.to(lastCard, {
      y: '+=150%',
      duration: 0.75,
      ease: CustomEase.create('cubic', '0.83, 0, 0.17, 1'),
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();

        gsap.set(lastCard.querySelectorAll('h1 span'), { y: -200 });

        setTimeout(() => {
          isAnimating.current = false;
        }, 1000);
      },
    });

    gsap.to(nextCard.querySelectorAll('h1 span'), {
      y: 0,
      duration: 1,
      ease: CustomEase.create('cubic', '0.83, 0, 0.17, 1'),
      stagger: 0.05,
    });
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return  
};

export default CardsSlider;