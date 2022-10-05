import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img from '../../imgs/gg.jpg'
import Image from 'next/image'
import img1 from '../../imgs/gg1.jpg'
import img2 from '../../imgs/gg2.jpg'
import img3 from '../../imgs/gg3.jpg'
import img4 from '../../imgs/gg4.jpg'
import img5 from '../../imgs/gg5.jpg'
import styles from '../../styles/Home.module.css'
import { Button } from 'react-bootstrap';

export const CardsHome = () => {
  return (
    <div color='black' className='container'>
    <br/>
    <Row xs={2} md={4} className="g-4" >
            <Col>
                <Card border="primary" style={{ maxWidth: '41vh' }}>
                    <Card.Header><Image src={img} width='450vh' height='350vh'/></Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Button>Detalji</Button>
                    </Card.Body>
                </Card>   
            </Col>

            <Col>
                <Card border="primary" style={{ maxWidth: '41vh' }}>
                    <Card.Header><Image src={img1} width='450vh' height='350vh'/></Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Button>Detalji</Button>
                    </Card.Body>
                </Card>   
            </Col>
            <Col>
                <Card border="primary" style={{ maxWidth: '41vh' }}>
                    <Card.Header><Image src={img2} width='450vh' height='350vh'/></Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Button>Detalji</Button>
                    </Card.Body>
                </Card>   
            </Col>
            
            <Col>
                <Card border="primary" style={{ maxWidth: '41vh' }}>
                    <Card.Header><Image src={img3} width='450vh' height='350vh'/></Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Button>Detalji</Button>
                    </Card.Body>
                </Card>   
            </Col>
    </Row><br/>
    </div>
  )
}
