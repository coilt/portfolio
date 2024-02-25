'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './styles.scrollcards.module.scss'; 
import Image from 'next/image';
import Card1 from './card_01.jpg';


export default function ScrollCards() {
  const container = useRef(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start start', 'end end']
})

const cardFlip = useTransform(scrollYProgress, [1, 0], [0.8,1] ) 
 

  return (

<div ref={container} className={styles.container}>
<div className={styles.scrollCard}> 

<div className={styles.card01}>
<motion.div style={{scale: cardFlip}} className={styles.cardContainer}>
  
<Image 

src={Card1}
fill
alt='card'


/>

  </motion.div>

</div>

</div>

</div>



  )
}