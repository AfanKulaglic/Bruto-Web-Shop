import React,{useState,useEffect} from 'react'
import Router from 'next/router';
import CartIcon from '../../imgs/shopIcon.png'
import Image from 'next/image'

export const CartHeader = () => {
    useEffect(() => {
    }, [Router.query]);

    const [name,setName] = useState(Router.query.name)
    console.log(Router.query.name)

  return (
    <div style={{backgroundColor:'skyblue'}}>
        <div style={{marginTop:'9vh',borderRadius:'10px',padding:'15px',display:'flex'}}>
            <div>
                <h1>Korpa</h1>
            </div>
            <div style={{marginLeft:'10px'}}>
                <Image src={CartIcon} height='40' width='45'/>
            </div>
        </div>
        <hr/>
        <div style={{marginLeft:'10px',paddingBottom:'12px'}}>
            <h6 style={{marginLeft:'10px'}}>{name}</h6>
        </div>
    </div>
  )
}
