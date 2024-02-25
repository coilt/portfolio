import styles from './styles.scrollcards.module.scss'; 
import Image from 'next/image';
import Card1 from './card_01.jpg';


export default function ScrollCards() {
  return (

<div className={styles.container}>
<div className={styles.scrollCard}> 

<div className={styles.card01}>
<div className={styles.cardContainer}>
  
<Image 

src={Card1}
fill
alt='card'


/>

  </div>

</div>

</div>

</div>



  )
}