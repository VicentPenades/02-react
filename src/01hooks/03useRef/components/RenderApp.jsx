import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

export const RenderApp = () => {
    const [text,setText]=useState("");
    const textRef=useRef(1);
    console.log(textRef)

    useEffect(()=>{
        textRef.current++;
    })


  return (
    <div>
        <input
        type="text"
            placeholder='Write here...'
            value={text}
            onChange={(event)=>setText(event.target.value)}
        />
        <p>Renders: {textRef.current}</p>
    </div>
  )
}
