import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/Home.module.css'

export const Loading = () => {
    return (
      <div className={styles.loadingCtx}>
        <Spinner animation="grow" size='large' color='#39C5E8' />
        <Spinner animation="grow" size='large' color='blue' style={{marginTop:'1vh'}} />
      </div>
    )
}
