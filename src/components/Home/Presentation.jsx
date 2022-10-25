import React from "react";
import style from '../../StyleSheets/Home/Presentation.module.scss'
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Presentation({img, title, text, imgPosition}){

    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])

    return(

        <div className={`${style.container} ${style[imgPosition]}`} data-aos='fade-up'>
                
                
            <div className={style.img_container}>
                <img src={img} alt='ilustration' />
            </div>

            <div className={style.text_container}>
                <h3>{title}</h3>
                {text}
            </div>


        </div>
            
    )
}