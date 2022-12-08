import React, { useState } from 'react'

const initialProduct={id:1,car:"Ford",color:"Red"};

export const ProductApp = () => {
    const [product, setProduct] = useState(initialProduct)

    const updateProduct=(property,value)=>{
        setProduct({
            ...product,
            [property]:value,
        })
    }

  return (
    <>
      <button onClick={()=>updateProduct("color","Blue")}>Update</button>

      <p>{product.car}</p>
      <p>{product.color}</p>
      
      <pre>{JSON.stringify(product, null, 2)} </pre>
    </>
  )
};
