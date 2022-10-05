import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'

export const FormRegister = () => {
    const[error,setError] = useState(false) 

    const[user,setUser] = useState({
        name:"",
        lastName:'',
        birthdayDate:'',
        phoneNumber:'',
        emailAdress:'',
        country:'',
        city:'',
        adress:'',
        postNumber:'',
        password:'',
        repeatPassword:''
    })

    const {name,lastName,birthdayDate,phoneNumber,emailAdress,country,city,adress,postNumber,password,repeatPassword} = user 

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
        console.log([e.target.value])
    }

    const onSubmit = async e => {
        e.preventDefault()
        if(name.length<2 || lastName.length<2 || phoneNumber<10 || password.length<5 || repeatPassword!==password || city.length<2) {
            setError(true)
        }
        else{
            setError(false)
            await axios.post("http://localhost:4000/accounts",user)
            Router.push(
                { pathname: "/", query: { email: emailAdress,name: name} }
            );
        }
    }

  return (
    <div className='container'>
        <h1 style={{display:'flex',justifyContent:'center'}}>Registracija</h1>
        <Form onSubmit={e => onSubmit(e)}><hr/>
        <Row xs={2} md={2} className="mb-3" style={{display:'flex',justifyContent:'center'}}>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Ime:</Form.Label>
            <Form.Control type="text" name='name' value={name} placeholder="Ime" onChange={(e) => onInputChange(e)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Prezime:</Form.Label>
            <Form.Control type="text" name='lastName' value={lastName} placeholder="Prezime" onChange={(e) => onInputChange(e)}/>
            </Form.Group>
        </Row>

        <Form.Group  as={Col} controlId="formGridPassword">
                <Form.Label>Datum rodjenja:</Form.Label>
                <Form.Control type="date" name='birthdayDate' value={birthdayDate} style={{backgroundColor: 'white'}} placeholder="31/12/2002" onChange={(e) => onInputChange(e)} />
        </Form.Group><br/>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Broj telefona:</Form.Label>
            <Form.Control type="text" name='phoneNumber' value={phoneNumber} placeholder="062999333" onChange={(e) => onInputChange(e)} />
        </Form.Group>

        <Row xs={2} md={2} className="mb-3" style={{display:'flex',justifyContent:'center'}}>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Ponoviti Sifru:</Form.Label>
            <Form.Control type="password" name='password' value={password} placeholder="*******" onChange={(e) => onInputChange(e)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Ponoviti Sifru:</Form.Label>
            <Form.Control type="Password" name='repeatPassword' value={repeatPassword} placeholder="*******" onChange={(e) => onInputChange(e)}/>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Email adresa:</Form.Label>
            <Form.Control type="text" name='emailAdress' value={emailAdress} placeholder="exmple@gmail.com" onChange={(e) => onInputChange(e)}/>
        </Form.Group>

        <Row className="mb-3" xs={2} md={4}>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Drzava:</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option name='country' value={country} onChange={(e) => onInputChange(e)} >--</option>
                <option name='country' value={country} onChange={(e) => onInputChange(e)} >Bosna i Hercegovina</option>
                <option name='country' value={country} onChange={(e) => onInputChange(e)} >Srbija</option>
                <option name='country' value={country} onChange={(e) => onInputChange(e)} >Hrvatska</option>
                <option name='country' value={country} onChange={(e) => onInputChange(e)} >Crna Gora</option>
                <option name='country' value={country} onChange={(e) => onInputChange(e)} >Makedonija</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Grad:</Form.Label>
            <Form.Control name='city' value={city} onChange={(e) => onInputChange(e)} placeholder='Sarajevo' />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
            <Form.Label>Addresa</Form.Label>
            <Form.Control name='adress' value={adress} onChange={(e) => onInputChange(e)} placeholder="Titova,12" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postanski broj</Form.Label>
            <Form.Control name='postNumber' value={postNumber} onChange={(e) => onInputChange(e)} placeholder='71000' />
            </Form.Group>
        </Row>

        {error &&
            <p style={{color:'red'}}>Podaci nisu dobro uneseni</p>
        }
        <p>Imate profil ? <span >Loginuj se</span></p>

        <Button variant="primary" type="submit" style={{width:'100%'}}>
            Registruj se
        </Button>
        </Form>
    </div>
  )
}
