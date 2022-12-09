import React, { useEffect } from 'react'
import { useState } from 'react'

export const Lifecycle = () => {

    const [counter1,setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)

    useEffect(() => {
      console.log('useEffect no dependency')
    })
    useEffect(() => {
        console.log('useEffect []')
      },[])
    useEffect(() => {
        console.log('useEffect [counter1]')
      },[counter1])
    useEffect(() => {
        console.log('useEffect [counter2]')
      },[counter2])
      useEffect(() => {
        console.log('useEffect [counter1,counter2]')
      },[counter1,counter2])

  return (
    <>
        <h3>Contador C1: {counter1} </h3>
        <h3>Contador C2: {counter2} </h3>

        <div>
            <button onClick={()=>setCounter1(counter1+1)}>Incement C1</button>
            <button onClick={()=>setCounter2(counter2+1)}>Incement C2</button>
        </div> 
    </>
  )
}
