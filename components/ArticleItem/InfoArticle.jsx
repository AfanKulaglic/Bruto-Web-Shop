import React,{useState}from 'react'
import { Button  } from 'react-bootstrap'
import shopIcon from '../../imgs/shopIcon.png'
import orderIcon from '../../imgs/orderIcon.png'
import Image from 'next/Image'
import { IconButton } from '@mui/material'
import { useEffect } from 'react'
import Router from 'next/router'

export const InfoArticle = ({price,text,name}) => {

    useEffect(() => {
    }, [Router.query]);

    const [nameW,setNameW] = useState(Router.query.name)
    console.log(nameW)

  return (
    <div style={{float:'right',padding:'2vh',float:'left'}}>
        <br/><br/>
        <h1>{name}</h1>
        <p>{text}</p>
        <hr/>
        <h1>{price}</h1>
        <Button value='naruci' href='/Orders'>
            <div style={{display:'flex',justifyContent:'center',padding:'1px'}}>
                <p style={{marginTop:'2vh',marginRight:'3px'}}>Naruci</p>
                <IconButton href='/Orders'><Image src={orderIcon} height='22' width='22'/></IconButton>
            </div>
        </Button > 
        <Button style={{marginLeft:'7px',backgroundColor:'green'}}>
            <div style={{display:'flex',justifyContent:'center',padding:'1px'}}>
                {nameW && <p style={{marginTop:'2vh',marginRight:'3px'}} onClick={() => {Router.push({ pathname: "/Cart", query: { name: Router.query.name } },'/Korpa')}}>{nameW}, stavi u korpu</p>}
                <IconButton src='/Orders' ><Image src={shopIcon} height='22' width='22'/></IconButton>
            </div>
        </Button > 
    </div>
  )
}
