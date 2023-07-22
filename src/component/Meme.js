import React from "react";
import memesData from "../memesData";


export default function Meme() {

  const [memeImg, setMemeImg] = React.useState() 
  
  
  const generate_random_meme = () => {
    
    const data = memesData.data.memes; 
    const random = Math.floor(Math.random() * data.length)
    
    setMemeImg(data[random].url);
  }

  return (
    <div className="meme">
      <div className="meme-inputs">
        <input type="text" />
        <input type="text" />
      </div>
      <button className="meme-button" onClick={generate_random_meme}>Get a new meme image  🖼</button>
      {memeImg && <img src={memeImg} className="meme-img" />}
    </div>
  )
}