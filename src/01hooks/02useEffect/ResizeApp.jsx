import React, { useState, useEffect } from 'react'

export const ResizeApp = () => {

    const [windowWidth,setWindowWidth]=useState(window.innerWidth);
    const isMobile=windowWidth<768;

    useEffect(() => {
        const handleResize=()=>{setWindowWidth(window.innerWidth)}
        window.addEventListener('resize',()=>handleResize)

    return ()=>{
        window.removeEventListener('resize',()=>handleResize)
    }
    },[])
    
  return (
    <>
        <h2>Windows Width: {windowWidth}</h2>
        {isMobile && (<h3>Is mobile</h3>)}
       
    </>
  )
}
