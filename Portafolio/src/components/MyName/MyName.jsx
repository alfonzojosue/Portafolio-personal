import React from 'react'
import style from './MyName.module.css'
import photo from '../../assets/photo.png'
import Fade from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import github from '../../assets/githubWhite.png'
import linkedln from '../../assets/linkedinWhite.png'
import portfolio from '../../assets/portfolioWhite.png'



const MyName = () => {
  return (
    <div className={style.container}>
    <div className={style.containerTitle}>

      <h1 className={style.title}>Hello!!, I'm</h1>

      <ul className={style.menu}>
  <li>
    <a href="#0">
      <span><h1>Josue Alfonzo </h1></span>
      <span>
        <h1>A Full Stack Developer</h1>
      </span>
    </a>
  </li>
</ul>
<div className={style.containerIconNetwork}>

<a href='https://github.com/alfonzojosue'><img src={github} className={style.iconNetwork}/></a>
<a href='https://www.linkedin.com/in/josuealfonzo/'><img src={linkedln} className={style.iconNetwork}/></a>
<a href='/'><img src={portfolio} className={style.iconNetwork}/></a>
</div>
</div>
<div className={style.containerPhoto}>
<img src='https://i.pinimg.com/originals/b3/7f/66/b37f6621f0fc863af8c8db13020b5d8f.gif' className={style.backgroundPhoto}/>
<Slide direction='right' cascade className={style.Slide}>
 
  <img src={photo} className={style.photo}/>
  </Slide>
</div>
    </div>
  )
}

export default MyName