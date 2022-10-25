import React from 'react'
import { NavLink } from "react-router-dom";
import style from '../../StyleSheets/Permanent/Card.module.scss'

export default function Card({name, NavLinkUrl, imgUrl, handleDelete, id}) {

    return (

        <div className={style.container}>

            <button onClick={()=> handleDelete(id)}>X</button>

            <div className={style.card}>

                <NavLink to={NavLinkUrl} className={style.link}>

                    <img src={imgUrl} alt='Icon' />
                    <h3>{name}</h3>

                </NavLink>
    
            </div>
        </div>

    )
}