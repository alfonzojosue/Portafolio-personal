import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import style from './Contact.module.css'
import user from '../../assets/user.png'
import email from '../../assets/email.png'
import chat from '../../assets/chat.png'
import {Fade} from "react-awesome-reveal";

const Contact = () => {
 
    const [state, handleSubmit] = useForm("xjvdoplg");
    if (state.succeeded) {
        return (
            <div className={style.container}>
            <Fade triggerOnce={true}><div className={style.containerTitle}><h2>Contact</h2></div></Fade>
            <Fade triggerOnce={true} duration={3000}><div className={style.succes}>
      <h2>Your message has been sent successfully.</h2>
      <img src={email} className={style.iconSucces}/>
        </div></Fade>
        </div>
        )
    }
    return (
        <div className={style.container}>
        <div className={style.stars1}></div>
    <div className={style.stars2}></div>
    <div className={style.stars3}></div>
        <Fade triggerOnce={true}><div className={style.containerTitle}><h2>Contact</h2></div></Fade>
        <Fade duration={3000} triggerOnce={true}><form onSubmit={handleSubmit} className={style.containerForm}>
        <div className={style.containerLabel}>
        <img src={email} className={style.iconEmail}/>
        <label htmlFor="email" className={style.label}>
          Email Address
        </label>
        </div>
        <input
        id="email"
        type="email"
        name="email"
        className={style.inputEmail}
        />
        <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        />
        <div className={style.containerLabel}>
        <img src={user} className={style.iconEmail}/>
        <label className={style.label}>
            Name
        </label>
        </div>
        <input id='name'
            type='text'
            name="name"
            className={style.inputEmail}
            />
            <div className={style.containerLabel}>
            <img src={chat} className={style.iconEmail}/>
            <label className={style.label}>Message</label>
            </div>
        <textarea
        id="message"
        name="message"
        className={style.textInput}
        />
        <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className={style.buttonEmail}>
        Submit
        </button>
    </form></Fade>
    </div>
)
}

export default Contact