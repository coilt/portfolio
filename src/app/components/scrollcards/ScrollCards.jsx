'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import styles from './styles.scrollcards.module.scss'
import Image from 'next/image'
import Card1 from './card_01.jpg'

export default function ScrollCards() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const cardBlur = useTransform(scrollYProgress, [0, 1], [0, 100]) // Blur effect, from 0 to 10px
  const blurValue = useTransform(scrollYProgress, [0, 1], ['100px', '100px']);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.scrollCard}>
        <div className={styles.card01}>
          <motion.div
            style={{ 
              scale: cardScale,
              filter: blurValue,
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
