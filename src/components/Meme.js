import React, { useState } from 'react'
import memesData from './memesData'

const Meme = () => {

    const [memeImage, setMemeImage] = useState('');

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        // console.log(url)
        setMemeImage(url);
    }

  return (
    <main>
    <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button 
            onClick={getMemeImage}
            className="form--button"
        >
            Get a new meme image 🖼
        </button>
    </div>
    <img src = {memeImage} alt='meme' className='meme--image'/>
</main>
  )
}

export default Meme
