import React from 'react'
import style from '../../StyleSheets/Home/LordIcon.module.scss'
export default function LordIcon({src}) {

    return (

        <div className={style.icon_container}>

            <lord-icon

                src={src}

                trigger={Number(window.innerWidth) > 450 ? "loop-on-hover" : "loop"}

                colors="primary:#6e44ff,secondary:#b33c86"

                state="loop"

                style={{width:'100%', height:'100%' }}

                >

            </lord-icon>

        </div>
    )
}
