import React, { useState } from 'react'

const initialState=0;

export const CounterApp = () => {
    const [counter, setCounter] = useState(initialState)

  return (
    <>
      <h1>Contador:{counter}</h1>
      <br></br>
      <button onClick={()=>setCounter(counter+1)}>Incrementar</button>
      <button onClick={()=>setCounter(counter-1)}>Decrementar</button>
      <button onClick={()=>setCounter(0)}>Resetear</button>
    </>

  )
}
