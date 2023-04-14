import React from 'react'
import style from './AboutFirts.module.css'
import pc from '../../../assets/desarrollo-web.png'
import {Slide} from "react-awesome-reveal";


const AboutFirts = () => {
  return (
    <div className={style.containerAbout}>
       <Slide direction='right' triggerOnce={true}>
     <div className={style.containerText}>
    <p>
   I have experience in web development using technologies
such as HTML, CSS, JavaScript, React, Node.js, and Express. 
I have also worked with databases such as PostgreSQL.
    </p>
    </div>
    </Slide>
    <div className={style.containerImg}><img src={pc} alt="pc" className={style.workImg}/></div>

   
  
</div>
  )
}

export default AboutFirts