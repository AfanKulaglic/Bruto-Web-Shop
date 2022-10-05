import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomePage } from './HomePage'
import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import brutoLogo from '../imgs/bruto.png'
import Spinner from 'react-bootstrap/Spinner';
import { Loading } from '../components/Loading'

export default function Home() {
  return (
    <div className={styles.body} >    
      <HomePage />
    </div>
  )
}
