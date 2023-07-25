import React from "react";
import memesData from "../memesData";


export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  
  
  const generate_random_meme = () => {
    
    const data = memesData.data.memes; 
    const random = Math.floor(Math.random() * data.length);
    const url = data[random].url;

    setMeme(prevState => ({
      ...prevState,
      randomImage: url
    }))
  };

  const handleChanges = events => {
    const {name, value} = events.target;
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  return (
    <div className="meme">
      <div className="meme-inputs">
        <input 
          type="text" 
          placeholder="Top text" 
          name="topText"
          value={meme.topText}
          onChange={handleChanges}
        />
        <input 
          type="text" 
          placeholder="Bottom text" 
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChanges}
        />
      </div>
      <button className="meme-button" onClick={generate_random_meme}>Get a new meme image  🖼</button>
      <div className="meme-img-section">
            {meme.randomImage && <img src={meme.randomImage} className="meme-img" />}
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>

    </div>
  )
}