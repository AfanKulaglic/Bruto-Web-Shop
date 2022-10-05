import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import img from '../../imgs/as.jpg'

export const HomeBorder = () => {
  return (
    <div className='container'>
        <div className={styles.homeBorder}>
            <Image src={img} height='1200vh' width='6000vh' style={{backgroundSize:'contain'}} />
        </div>
    </div>
  )
}
