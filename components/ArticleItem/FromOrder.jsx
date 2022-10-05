import React,{useEffect,useState} from 'react'
import {Navigate} from 'react-router-dom'
import styles from '../../styles/Home.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Image from 'next/image'
import bhPostExpressLogo from '../../imgs/bhPostExpress.png'
import bhPostLogo from '../../imgs/bhPost.png'
import euroExpressLogo from '../../imgs/euroExpress.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row'

export const FromOrder = () => {
    
    const [item,setItem] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/items')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setItem(data)
            console.log(data)
        })
    },[])

    const [value, setValue] = React.useState(dayjs());

    const[user,setUser] = useState({
        name:"",
        lastName:'',
        city:'',
        postNumber:'',
        orderEngine:'',
        birthdayDate:'',
        product:''
    })

    console.log(value)
    const {name,lastName,city,postNumber,orderEngine,birthdayDate,product} = user   

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value})
        console.log([e.target.value])
    }

    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:4000/orders",user)
    }

  return (
        <>
        <Form onSubmit={e => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ime:</Form.Label>
                <Form.Control type="text" name='name' value={name} placeholder="Ime" onChange={(e) => onInputChange(e)} />
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Prezime:</Form.Label>
                <Form.Control type="text"  name='lastName' value={lastName} placeholder="Prezime"onChange={(e) => onInputChange(e)}  />
            </Form.Group>
            <Row xs={2} md={2} className="mb-3" style={{display:'flex',justifyContent:'center'}}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Grad:</Form.Label>
                    <Form.Control type="text"  name='city' value={city} placeholder="Sarajevo" onChange={(e) => onInputChange(e)}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Postanski broj:</Form.Label>
                    <Form.Control type="number" name='postNumber' value={postNumber} placeholder="71000" onChange={(e) => onInputChange(e)} />
                </Form.Group>
            </Row>

            <Form.Group>
                <Form.Label>Datum rodjenja:</Form.Label>
                <Form.Control type="date" name='birthdayDate' style={{backgroundColor: 'white'}} value={birthdayDate} placeholder="31/12/2002" onChange={(e) => onInputChange(e)} />
            </Form.Group><hr/>

            <Form.Group>
                <Form.Label>Proizvod:</Form.Label><br/>
                <Form.Select id="cars" name="cars" style={{backgroundColor:'transparent',color:'black'}} onChange={(e) =>onInputChange(e)}>
                    {item && item.map(item => 
                        <>
                            <option value={item.name} onChange={(e) => onInputChange(e)} style={{backgroundColor:'white',color:'black'}}>{item.name}</option>
                        </>
                    )}
                </Form.Select>
            </Form.Group><br/>
          
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nacin isporuke:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name='orderEngine' 
                    value={orderEngine}
                    onChange={(e) =>onInputChange(e)}
                >   
                    <div style={{display:'flex'}}>
                        <FormControlLabel value='BH Post Express'  control={<Radio  onChange={(e) => onInputChange(e)} />} label="BH POST EXPRESS" />
                        <Image src={bhPostExpressLogo} height='10vh' width='90vh' />
                    </div>
                    <div style={{display:'flex'}}>
                        <FormControlLabel  value='EuroExpress'  control={<Radio  onChange={(e) => onInputChange(e)} />} label="EURO EXPRESS" />
                        <Image src={euroExpressLogo} height='10vh' width='140vh' />
                    </div>
                    <div style={{display:'flex'}}>
                        <FormControlLabel  value='BH Posta' control={<Radio  onChange={(e) => onInputChange(e)} />} label="BH POSTA" />
                        <Image src={bhPostLogo} height='10vh' width='110vh' />
                    </div>
                </RadioGroup>
            </FormControl><br/><hr/>
            <Button variant="primary" type="submit" style={{width:'100%'}}>Naruci</Button>
        </Form>
        </>
  )
}
