import React from "react";
import memesData from "../memesData";


export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  }) 
  
  
  const generate_random_meme = () => {
    
    const data = memesData.data.memes; 
    const random = Math.floor(Math.random() * data.length)
    const url = data[random].url;

    setMeme(prevState => ({
      ...prevState,
      randomImage: url
    }))
  }

  return (
    <div className="meme">
      <div className="meme-inputs">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
      </div>
      <button className="meme-button" onClick={generate_random_meme}>Get a new meme image  🖼</button>
      {meme.randomImage && <img src={meme.randomImage} className="meme-img" />}
    </div>
  )
}