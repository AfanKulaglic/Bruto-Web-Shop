import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Image from 'next/image'
import axios from 'axios'
import Router from 'next/router';
import NavbarCtx from '../NavbarCtx';
import Link from 'next/link'

export const FormLogin = () => {
    const [item,setItem] = useState(null)
    const[name,setName] = useState(undefined)

    useEffect(() => {
        fetch('http://localhost:4000/accounts')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItem(data)
        })
    },[])

    const[isLogin,setIsLogin] = useState(false)

    const SuccessLogin = ({name}) => {
        setName(name)
        setIsLogin(true)
        console.log(isLogin)
        setErrorInterface(false)
    }
    const UnsuccessLogin = () => {
        setIsLogin(false)
    }    

    const[user,setUser] = useState({
        password:"",
        emailAdress:''
    })

    const {password,emailAdress} = user  

    const onInputChange = e => {
        setErrorInterface(false)
        setUser({...user,[e.target.name]:e.target.value})
        console.log([e.target.value])
    }

    const onSubmit = async e => {
        e.preventDefault()
        if(isLogin===true) {
            Router.push(
                { pathname: "/", query: { email: emailAdress,name: name} }
            );
            setErrorInterface(false)
        }
        else {
            setErrorInterface(true)
            console.log(223)
        }
    }

    const [errorInterface,setErrorInterface] = useState(false)

    const validateLogin = () => {
        if(isLogin===false) {
            console.log('error')
            setErrorInterface(true)
        }
        else {
            console.log('no error')
            setErrorInterface(false)
        }
    }

  return (
    <div className='container'>
        <h1 style={{display:'flex',justifyContent:'center'}}>Prijava</h1>
        <Form onSubmit={e => onSubmit(e)}><hr/>
        <Row xs={1} md={2} className="mb-3" style={{display:'flex',justifyContent:'center'}}>   
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" name='emailAdress' value={emailAdress} placeholder="example@gmail.com" onChange={(e) => onInputChange(e)}/>
            </Form.Group> <br/>
                
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Sifra:</Form.Label>
                <Form.Control type="password" name='password' value={password} placeholder="********" onChange={(e) => onInputChange(e)}/>
            </Form.Group><br/>
        </Row>

        {item && item.map(item => 
            <>
                {item.password == password && item.emailAdress == emailAdress && 
                    <div style={{display:'flex'}}>
                        <p>Dobrodosli</p><p style={{color:'red',marginLeft:'10px'}}>{item.name}</p>
                        <SuccessLogin name={item.name} />
                    </div>
                }
            </>
        )}

        <p>Niste registrovani? <Link style={{color:'red'}} href='/Register'>Registruj se</Link></p>
        <p color='red'>{errorInterface ? 'Pogresna sifra ili email' : ''}</p>

        <Button variant="primary" type="submit" onClick={() => validateLogin()} style={{width:'100%'}}>
            Prijavi se
        </Button>
        </Form>
    </div>
  )
}
