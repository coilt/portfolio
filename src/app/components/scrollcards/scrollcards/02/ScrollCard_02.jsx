'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import styles from './styles.scrollcards.module.scss'
import Image from 'next/image'

 
import Card2 from './card_02.jpg'

export default function ScrollCard_02() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  // First card transforms
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [-100, -3000]); 


 

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.scrollCard}>
        <div className={styles.card02}>
          <motion.div
            style={{
              scale: cardScale,
              y: y,
            }}
            className={styles.cardContainer}
          >
            <Image src={Card2} fill alt='card' />
          </motion.div>
        </div>
      </div>

      
    </div>

    


  )
}
