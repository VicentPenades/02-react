import React from 'react'
import { useState } from 'react'

const initialCart=[
    {id:1,name:"Apple",description:"Description #1"},
    {id:2,name:"Orange",description:"Description #2"},
    {id:3,name:"Banana",description:"Description #3"},
]

export const ShoppingCart = () => {
    const [cart,setCart]=useState(initialCart)

    const addProduct=newProduct=>{
        setCart([newProduct,...cart])
    };

    const deleteProduct=(idProduct)=>{
        setCart(cart.filter(product=>product.id!==idProduct))
    };

    const updateProduct=(updatedProduct)=>{
        setCart(cart.map(product=>(updatedProduct.id===product.id?updatedProduct:product)))
    };

  return (

    <>
        <button onClick={()=>addProduct({id:"New ID", name:"New NAME",description:"New DESCRIPTION"})}>Add</button>

        {cart.map((product)=>{return(
            <div key={product.id}>
                <h2>Product: {product.name}</h2>
                <p>Description: {product.description}</p>
                <button onClick={()=>deleteProduct(product.id)}>Delete</button>
                <button onClick={()=>updateProduct({id:product.id, name:"Update NAME",description:"Update DESCRIPTION"})}>Update</button>
            </div>
        )})}

        <pre>{ JSON.stringify(cart, null, 2) }</pre>
    </>

  )
}
