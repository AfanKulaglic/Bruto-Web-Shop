import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image'

export const BanerItem = ({name,image,text,baner}) => {
  return (
    <div>
        <Card className="bg-dark text-white">
            <img src={baner} alt="Card image" height='100%' width='100%' />
            <Card.ImgOverlay>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    </div>
  )
}

