import React, {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import { ImagesItem } from '../../components/ArticleItem/ImagesItem'
import { InfoArticle } from '../../components/ArticleItem/InfoArticle'
import { Footer } from '../../components/Footer'
import RatingHome from '../../components/RatingHome'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/Home.module.css'
import Router from 'next/router'


const Arc = () =>  {
  const router = useRouter()

  const {id} = router.query
  
  const [item,setItem] = useState(null)

  useEffect(() => {
      fetch('http://localhost:4000/items')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setItem(data)
      })
  },[Router.query])

  const [name,setName] = useState(Router.query.name)
  console.log(name)
  return (
    <div className={styles.itemImage}>
    <div className='container'>
      {item && item.map(item => 
        <>
          {item.id == id && 
            <Row sx={1} md={2} style={{display:'flex',marginBottom:'4vh'}}>
              <Col>
                <ImagesItem name={item.name} image={item.image} text={item.text} image1={item.image1} image2={item.image2}/>
              </Col>
              <Col>
                <InfoArticle price={item.price} text={item.text} name={item.name}/>
              </Col>
            </Row>
          }
        </>
      )}
      <hr/>
      </div>
      <RatingHome />
      <Footer />
    </div>
  )
}

export default Arc
