import React, { useState } from 'react'

const initialError="";

export const ErrorApp = () => {
    const [error,setError]=useState(initialError);

   return (
    <>
      <button onClick={()=>setError("Muestro ERROR UNO")}>Error 1</button>
      <button onClick={()=>setError("Muestro ERROR DOS")}>Error 2</button>
      <button onClick={()=>setError("Muestro ERROR TRES")}>Error 3</button>

      <p>{error}</p>
    </>
  )
}
