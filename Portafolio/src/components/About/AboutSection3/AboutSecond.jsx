import React from 'react'
import style from './AboutSecond.module.css'
import digital from '../../../assets/digital.png'
import {Slide} from "react-awesome-reveal";


const AboutSecond = () => {
  return (
    <div className={style.containerAbout}>
    <div className={style.containerImg}>
    <img src={digital} alt="digital" className={style.workImg}/>
    </div>
    <Slide  >
    <div className={style.containerText}>
    <p>
    I am a proactive person and I am always looking for ways to improve my skills and knowledge.
    I enjoy working in a team and collaborating with other developers to find innovative solutions.
    </p>
    </div>
    </Slide>
</div>
  )
}

export default AboutSecond