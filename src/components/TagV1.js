import React,{useState,useEffect} from 'react'
import axios from 'axios'
import useGif from '../customHooks/useGif'

const API_KEY = process.env.REACT_APP_API_KEY

export default function TagV1() {
    const [tag,setTag] = useState('dogs')
    const {gif,fetchGif} = useGif(tag)

   
    const handleClick=()=>{
        fetchGif(tag)
    }

    return (
       <div className="container">
           <h1>Random {tag} gif</h1>
           <img width="500" src={gif} alt="Random Gif" />
           <input value={tag} onChange={(e)=>setTag(e.target.value)}/>
           <button onClick={handleClick}>Click for new</button>
       </div>
    )
}
