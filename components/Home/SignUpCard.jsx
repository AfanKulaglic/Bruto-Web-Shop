import React from 'react'
import styles from '../../styles/Home.module.css'
import Button from 'react-bootstrap/Button';

export const SignUpCard = () => {
  return (
    <div className={styles.signUpCard}>
        <h1>REGISTRUJ SE ZA</h1><h1>PAMETNU TRGOVINU</h1>
        <Button variant="dark">Idi</Button>
    </div>
  )
}
