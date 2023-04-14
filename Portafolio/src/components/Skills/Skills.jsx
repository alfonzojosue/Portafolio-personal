import React from 'react'
import obj from '../../json/skills.json'
import style from './Skills.module.css'
import {Fade} from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";
const Skills = () => {
    console.log(obj.map(element => element.img))
  return (
    <div className={style.containerSkills}>
    <div className={style.stars1}></div>
    <div className={style.stars2}></div>
    <div className={style.stars3}></div>
        <div className={style.Title}>
        <Fade direction='right' duration={500}>
        <h2>Skills</h2>
        </Fade>
        </div>
     
        <div className={style.gridContainer}>
            {obj.map(element => {
              return (
                <Fade duration={3000} key={element.name} triggerOnce={true}>
                <div className={style.skill}>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                <img src={element.img} className={style.imgIcon}/>
                </a>
                <p>{element.name}</p>
                </div>
                </Fade>
                )
            })}
        </div>
      
    </div>
  )
}

export default Skills