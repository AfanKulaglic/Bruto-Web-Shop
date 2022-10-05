import React from 'react'
import styles from '../styles/Home.module.css'
import {FormLogin} from '../components/Login/FormLogin'

const Login = () => {
  return (
    <div className={styles.Login}>
        <FormLogin />
    </div>
  )
}

export default Login
