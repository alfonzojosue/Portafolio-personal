import React from 'react'
import style from './About.module.css'
import work from '../../../assets/trabajando.png'
import Fade from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";

const About = () => {
  return (
    <div>
        <div className={style.Title}>
          <Slide direction='right'>
            <h2>About me</h2>
            </Slide>
        </div>
        <div className={style.containerAbout}>
            <div className={style.containerImg}><img src={work} alt="work" className={style.workImg}/></div>
        
           <Fade className={style.fade}>
            <div className={style.containerText}>
            <p>
            Hello! I'm a Full Stack Developer Jr.
            I'm passionate about the world of technology and
            I'm always looking to learn new things.
            </p>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default About