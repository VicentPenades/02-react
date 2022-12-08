
import React, { useState } from 'react'

const initialConditional=true;

export const ConditionalApp = () => {
  const [conditional, setConditional] = useState(initialConditional)

  return (
    <>
      <button onClick={()=>setConditional(!conditional)}>Botón</button>
      <p>{conditional?"La condición es verdadera":"La condición es falsa"}</p>  
    </>
  )
}
