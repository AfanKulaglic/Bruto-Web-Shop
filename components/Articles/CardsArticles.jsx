import React, { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import { Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'
import ArticlesPage from '../../pages/ArticlesPage';
import Router from 'next/router';

const CardsArticles = () => {
    const [item,setItem] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItem(data)
        })
    },[])
    useEffect(() => {
    }, [Router.query]);

    const [name,setName] = useState(Router.query.name)
    console.log(Router.query.name)

  return (
    <div className='container'>
        <Row xs={2} md={3} className="g-4" style={{marginTop:"1px"}}> 
            {item && item.map(item => 
            <>
                <Col>
                    <Card border="white" className={styles.cardArticle} style={{ width: '100%',height:'100%' }}>
                        <img src={item.image} width='100%' height='100%'/>
                        <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                        {name &&
                            <Button onClick={() => {Router.push({ pathname: [item.href]+[item.id], query: { name: Router.query.name } })}}>Detalji</Button>
                        }
                        {!name &&
                            <Button onClick={() => {Router.push({ pathname: [item.href]+[item.id]})}}>Detalji</Button>
                        }
                        </Card.Body>
                    </Card>   
                </Col>
            </>
            )}
        </Row>
    </div>
  )
}

export default CardsArticles