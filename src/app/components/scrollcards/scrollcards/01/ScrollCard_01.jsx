'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import styles from './styles.scrollcards.module.scss'
import Image from 'next/image'

import Card1 from './card_01.jpg'
 

export default function ScrollCard_01() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  // First card transforms
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.6])
 

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.scrollCard}>
        <div className={styles.card01}>
          <motion.div
            style={{
              scale: cardScale,
            }}
            className={styles.cardContainer}
          >
            <Image src={Card1} fill alt='card' />
          </motion.div>
        </div>
      </div>

      
    </div>

    


  )
}
