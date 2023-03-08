
import memesData  from "../memesData";
import {useState} from "react";


function Meme() {
 const [memeImage, setMemeImage] = useState('');

function getMemeImage() {
  const memeArray = memesData.data.memes;
  const randomNumber = Math.floor(Math.random() * memeArray.length);
  const {url} = memeArray[randomNumber];
  setMemeImage(url);
}

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
        />
        <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
        <img src={memeImage} className="meme--image" />
      </div>
    </main>
  );
  
}

export default Meme;