import React from 'react'
import trollface from "../assets/images.png"
import '../App.css';

const Header = () => {
  return (
    <header className='header'>
      <img src={trollface} alt="" className='header--image' />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>React Project</h4>
    </header>
  )
}

export default Header
