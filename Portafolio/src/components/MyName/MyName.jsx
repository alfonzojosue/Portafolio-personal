import React from 'react'
import style from './MyName.module.css'
import photo from '../../assets/photo.png'
import Fade from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";



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
</div>
<div className={style.containerPhoto}>
<Slide direction='right' cascade className={style.Slide}>
  <img src={photo} className={style.photo}/>
  </Slide>
</div>
    </div>
  )
}

export default MyName