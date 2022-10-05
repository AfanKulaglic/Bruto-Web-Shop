import Image from 'next/image'
import React, { useState } from 'react'
import arc from '../../imgs/banerUsisivac.jpg'

export const CartCtx = () => {
    const text = useState('asdjhajsdhkjashdkj')
  return (
    <div>
        <div>
            <p>{text}</p>
        </div>
        <div>
            <Image src={arc} height='20' width='20' />
        </div>
    </div>
  )
}
