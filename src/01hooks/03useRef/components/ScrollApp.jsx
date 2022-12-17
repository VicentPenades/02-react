import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

export const ScrollApp = () => {
    const [background,setBackground]=useState("blue");
    const divRef=useRef()

    useEffect(()=>{

        const handleScroll=()=>{
            const div=divRef.current;
            const {y}=div.getBoundingClientRect();
            const background=(y<0?"red":"blue");
            setBackground(background);
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }

    })

    const divStyle={
        width:"600px",
        height:"200vh",
        backgroundColor:background,
    }

  return (
    <div>
        <div style={divStyle} ref={divRef}>
        <h1>Scroll to change background-color</h1>
        </div>
    </div>
  )
}
