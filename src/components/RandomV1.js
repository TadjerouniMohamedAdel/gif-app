import React,{useState,useEffect} from 'react'
import axios from 'axios'
import useGif from '../customHooks/useGif'

const API_KEY = process.env.REACT_APP_API_KEY

export default function RandomV1() {
    const {gif,fetchGif} = useGif()    
    

    const handleClick=()=>{
        fetchGif()
    }

    return (
       <div className="container">
           <h1>Random gif</h1>
           <img width="500" src={gif} alt="Random Gif" />
           <button onClick={handleClick}>Click for new</button>
       </div>
    )
}
