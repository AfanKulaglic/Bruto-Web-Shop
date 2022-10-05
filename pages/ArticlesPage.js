import React,{useEffect} from 'react'
import CardsArticles from '../components/Articles/CardsArticles'
import { Footer } from '../components/Footer'
import NavbarCtx from '../components/NavbarCtx'
import RatingHome from '../components/RatingHome'
import styles from '../styles/Home.module.css'
import Router from 'next/router';

const ArticlesPage = () => {
  useEffect(() => {
  }, [Router.query]);

  console.log(Router.query.email)
  
  return (
    <div className={styles.ArticlesPage}>
      <CardsArticles />
      <div>
        <hr color='black'/>
        <RatingHome />
        <Footer />
      </div>
    </div>
  )
}

export default ArticlesPage