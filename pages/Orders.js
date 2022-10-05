import React from 'react'
import styles from '../styles/Home.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FromOrder } from '../components/ArticleItem/FromOrder';

const Orders = () => {
  return (
    <div className='container'>
    <div className={styles.Orders}>
        <FromOrder  />
    </div>
    </div>
  )
}

export default Orders