import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import olxIcon from '../imgs/olx.png'
import instagramIcon from '../imgs/instagram.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div style={{display:'flex',paddingLeft:'10%'}}>
            <h5>TrustScore</h5><h3>3.8</h3>
            <p style={{marginLeft:'70vh'}}>Pomoc</p>
        </div>
        <div style={{display:'flex',paddingLeft:'10%'}}>
            <h5>Reviews</h5><h3>132</h3>
            <p style={{marginLeft:'72vh'}}>Informacije</p>
        </div>
        <div style={{display:'flex',paddingLeft:'10%'}}>
            <Image src={olxIcon} height='40vh' width='40vh'/>
            <Image src={instagramIcon} height='40vh' width='40vh'/>
        </div>
        <div style={{paddingLeft:'10%'}}><br/>
            © 2022 bruto
        </div>
    </div>
  )
}
