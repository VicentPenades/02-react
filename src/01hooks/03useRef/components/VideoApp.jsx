import React, { useRef } from 'react'
import { useState } from 'react'

export const VideoApp = () => {
    const [isPlaying, setIsPlaying]=useState(false);
    const videoRef=useRef();

    const handlePlay=()=>{
        const video=videoRef.current;
        isPlaying?video.pause():video.play();
        setIsPlaying(!isPlaying);
    }

  return (
    <div>
    <video width="400px" ref={videoRef} onClick={handlePlay}>
        <source src="assets/video.mp4" type='video/mp4'/>
    </video>
    <br></br>
    <button onClick={handlePlay}>{!isPlaying?"Play":"Pause"}</button>
    </div>
  )
}
