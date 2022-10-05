import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imgs/bruto.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState,useEffect } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavbarCtx = () => {
    const Router = useRouter()
        
  useEffect(() => {
    }, [Router.query]);

    const [name,setName] = useState(Router.query.name)
    console.log(Router.query.name)

  return (
    <div className={styles.appBar}>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="primary" fixed='top'>
        <Container>
            <Navbar.Brand href="/"><Image src={logo} height='50vh' width='50vh'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'skyblue'}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                {Router.query.name &&
                    <>
                        <Nav.Link  color='white' onClick={() => {Router.push({ pathname: "/", query: { name: Router.query.name } },'/Pocetna')}}>Pocetna</Nav.Link>
                        <Nav.Link onClick={() => {Router.push({ pathname: "/ArticlesPage", query: { name: Router.query.name } },'/Druga')}} color='white'>Artikli</Nav.Link>        
                    </>
                }
                {!Router.query.name &&
                    <>
                        <Nav.Link  color='white' onClick={() => {Router.push({ pathname: "/"})}}>Pocetna</Nav.Link>
                        <Nav.Link onClick={() => {Router.push({ pathname: "/ArticlesPage"})}} color='white'>Artikli</Nav.Link>   
                    </>
                }
                <Nav.Link onClick={() => {Router.push({ pathname: "/About", query: { name: Router.query.name } })}} color='white'>O nama</Nav.Link>
                {/* 
                <NavDropdown title="Kategorije" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><Link href='/Categorys/Satovi'><p>Satovi</p></Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Oprema za vozila
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Elektronska oprema</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Sve
                </NavDropdown.Item>
                </NavDropdown>
                */}
            </Nav>
            <Nav>
                {Router.query.name === undefined && 
                    <>
                        <Nav.Link color='white' href="/Login">Prijava</Nav.Link>
                        <Nav.Link color='white' href="/Register">Registracija</Nav.Link>
                    </>
                }
                {Router.query.name !== undefined && 
                    <>
                        <Nav.Link color='skyblue' href="#deets" onClick={() => {Router.push({ pathname: "/User" })}}>{Router.query.name}</Nav.Link>
                        <Nav.Link color='red' href="#deets" onClick={() => {Router.push({ pathname: "/" })}}>Odjava</Nav.Link>
                    </>
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavbarCtx