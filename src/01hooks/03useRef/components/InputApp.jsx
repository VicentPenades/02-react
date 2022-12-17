import React, { useState } from 'react'
import { useRef } from 'react'

export const InputApp = () => {
    const [text, setText] = useState("");
    const inputRef=useRef();

    const handleFocus=()=>{
        const input=inputRef.current;
        input.focus();
    }

    const handleCopy=()=>{
        const input=inputRef.current;
        input.select()
        document.execCommand("copy")
    }

  return (
    <>
    <form>
    <input  placeholder='Write here...'
            ref={inputRef}
            value={text}
            onChange={(event)=>setText(event.target.value)}
    ></input>
    <button onClick={handleFocus}>Focus</button>
    <button onClick={handleCopy}>Copy</button>
    </form>
    
    </>
  )
}
