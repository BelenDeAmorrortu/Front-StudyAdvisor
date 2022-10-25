import React, {useEffect} from "react";
import style from '../../StyleSheets/Home/Header.module.scss'
import img from '../../images/undraw_add_tasks_re_s5yj.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";

export default function Header(){

    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])

    return(

        <div className={style.header}>

            <div className={style.image_and_title}>

                <div className={style.title_container}>

                    <h1>Study Advisor</h1>
                    <NavLink to='/signIn'>
                        <button>Sign In</button>
                    </NavLink>
                </div>

                <div className={style.image_container} data-aos='fade-left'>
                    <img src={img} />
                </div>

            </div>

            <div className={style.wave} style={{height: '150px', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#ffff'}}></path></svg></div>

        </div>
    )
}