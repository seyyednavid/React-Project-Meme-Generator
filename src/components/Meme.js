import memesData from "../memesData";
import { useState } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}

export default Meme;
