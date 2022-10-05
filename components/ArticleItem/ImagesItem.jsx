import React, {useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import nextImg from '../../imgs/next.png'
import previousImg from '../../imgs/previous.png'
import next from 'next';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import SimpleImageSlider from "react-simple-image-slider";

export const ImagesItem = ({image,text,name,image1,image2}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[one,setOne] = useState(image)
    const[two,setTwo] = useState(image1)
    const[three,setThree] = useState(image2)
    const[main,setMain] = useState(image)

    const images = [
        one,
        two,
        three
    ]

    const previousF = () => {
        setOne(two)
        setTwo(three)
        setThree(one)        
    }
    
    const nextF = () => {
        setOne(three)
        setTwo(one)
        setThree(two)

    }

    const Click = ({props}) => {
        console.log({props})
        return (
            <h1 syle={{color:'black'}}>{props}</h1>
        )
    }

    const CarouselF = ({three,one,two}) => {
        return (
        <Carousel interval={null}>
          <Carousel.Item onClick={handleShow}>
            <img 
              className="d-block w-100"
              src={one}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item onClick={handleShow}>
            <img
              className="d-block w-100"
              src={two}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item onClick={handleShow}>
            <img
              className="d-block w-100"
              src={three}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        )
    }

    const oneSelect = () => {
        setOne(one)
        setTwo(two)
        setThree(three)
    }

    const twoSelect = () => {
        setOne(two)
        setTwo(three)
        setThree(one)
    }

    const threeSelect = () => {
        setOne(three)
        setTwo(one)
        setThree(two)
    }

  return (
    <>
    <br/>
    <div className={styles.zoomImg}>
        <CarouselF one={one} two={two} three={three} />
        <Modal show={show} onHide={handleClose} size='xl' aria-labelledby="contained-modal-title-vcenter" centered >
            <div style={{background:'white'}}>
                <Modal.Header closeButton>
                </Modal.Header>
                <CarouselF one={one} two={two} three={three} />
            </div>
        </Modal>
    </div>
    <div style={{display:'flex',width:'100%',marginTop:'-7.8vh'}}>
        <div style={{marginTop:'3vh'}}>
            <Image src={previousImg} height='30%' width='40%' onClick={previousF} style={{border:'1px solid black',paddingRight:'2%',justifyContent:'center'}}/ >
        </div>
        <div style={{display:'flex',padding:'2vh',justifyContent:'center',overflow:'hidden',width:'90%',height:'15vh',marginTop:'-2vh'}}>
            <img src={one} height='80vh' width='120vh' onClick={oneSelect} style={{border:'1px solid black'}}/ >
            <img src={two} height='80vh' width='120vh' onClick={twoSelect} style={{border:'1px solid black'}}/ >
            <img src={three} height='80vh' width='120vh' onClick={threeSelect} style={{border:'1px solid black'}}/ >  
        </div>
        <div style={{marginTop:'3vh'}}>
            <Image src={nextImg} height='30%' width='40%' onClick={nextF} style={{border:'1px solid black',paddingLeft:'2%'}}/ >
        </div>
    </div>
    </>
  )
}
