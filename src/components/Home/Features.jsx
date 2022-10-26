import React from 'react'
import Feature from './Feature'
import LordIcon from './LordIcon'
import style from '../../StyleSheets/Home/Features.module.scss'
import { NavLink } from 'react-router-dom'

export default function Features() {
    
    return (

        <div className={style.features}>

            <Feature name='Calendar' icon={<LordIcon src='https://cdn.lordicon.com/uutnmngi.json' />} />

            <NavLink to='/summary' style={{textDecoration: 'none'}}>

                <Feature name='Summary' icon={<LordIcon src='https://cdn.lordicon.com/hiqmdfkt.json'/>} />

            </NavLink>
            
            <NavLink to='/FlashCards' style={{textDecoration: 'none'}} >

                <Feature name='Flash Cards' icon={<LordIcon src='https://cdn.lordicon.com/xhsumrcb.json'/>}/>

            </NavLink>


        </div>
    )
}
