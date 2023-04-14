import React from 'react'
import style from './MyProyects.module.css'
import proyect from '../../json/proyects.json'
import SwiperCard from '../SwiperCard/SwiperCard'
import github from '../../assets/github.png'
import file from '../../assets/file.png'
import Fade from "react-awesome-reveal";

const MyProyects = () => {
  return (
    <div className={style.container}>
        <div className={style.title}>
        <Fade triggerOnce={true}>
            <h2>My proyects</h2>
            </Fade>
        </div>
        <div className={style.containerPricipal}>
          {proyect.map(e => {
            return (
              <Fade triggerOnce={true}>
              <div className={style.containerProyect}>
                <div className={style.containerSwiper}>
                <SwiperCard props={e.img}/>
                </div>
                <div className={style.containerText}>
                  <h2 className={style.titleText}>{e.name}</h2>
                  <p>{e.text}</p>
                  </div>
                  <div className={style.containerIcon}>
                    <a href={e.linkGithub}><img src={github} className={style.icon}/></a>
                    <a href={e.linkDeploy}><img src={file} className={style.icon}/></a>
                  </div>
              </div>
              </Fade>
            )
          })}
        </div>
    </div>
  )
}

export default MyProyects