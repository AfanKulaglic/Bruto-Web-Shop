import React from 'react'
import { FormRegister } from '../components/Register/FormRegister'
import Img from '../imgs/article1.jpg'
import styles from '../styles/Home.module.css'

const Register = () => {
  return (
    <div className={styles.Register}>
        <FormRegister />
    </div>
  )
}

export default Register
