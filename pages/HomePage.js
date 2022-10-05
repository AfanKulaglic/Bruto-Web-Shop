import React from 'react'
import { useEffect } from 'react'
import { CarouselCtx } from '../components/Home/CarouselCtx'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CardsHome } from '../components/Home/CardsHome';
import { HomeBorder } from '../components/Home/HomeBorder';
import { Advantages } from '../components/Home/Advantages';
import { SignUpCard } from '../components/Home/SignUpCard';
import RatingHome from '../components/RatingHome';
import { Footer } from '../components/Footer';
 
export const HomePage = () => {
  return (
    <div>
      <CarouselCtx />
      <HomeBorder />
      <CardsHome />
      <Advantages />
      <SignUpCard />
      <div>
        <hr color='black'/>
        <RatingHome />
        <Footer />
      </div>
    </div>
  )
}

