import React from "react";
import style from '../../StyleSheets/Permanent/Nav.module.scss'
import StudyAdvisorCompleteLogo from '../../images/complete logo.png'
import NavMenuIcon from '../../images/NavOptionsIcon.png'
import { NavLink } from "react-router-dom";


export default function Nav(){

    return(

        
        <nav className={style.nav}>

            <NavLink to='/'>
                
                <img src={StudyAdvisorCompleteLogo} alt="Study Advisor Logo" />

            </NavLink>


            <ul id="ul_not_responsive">

                <NavLink to='/signIn' style={{textDecoration: 'none'}}>
                    <li>My Account</li>
                </NavLink>

            </ul>
{/* 
            <div id="div_ul_responsive" className="closed">

                <ul id="ul_responsive">

                    <li> <a href="">Inicio </a></li>

                    <li> <a href=""> Mi Cuenta </a></li>

                    <li> <a href=""> Calendario </a></li>
                    


                </ul>

            </div>    */}

            {/* <div id="nav_options_icon">
                <img src={NavMenuIcon} alt="Menu Icon" />
            </div> */}

        </nav>

    )


}