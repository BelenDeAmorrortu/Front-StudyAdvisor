import React from "react";
import style from '../../StyleSheets/Permanent/Nav.module.scss'
import StudyAdvisorCompleteLogo from '../../images/complete logo.png'
import NavMenuIcon from '../../images/NavOptionsIcon.png'
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import UserImg from '../../images/user.png'


export default function Nav(){

    const {currentUser} = useAuth()

    return(

        
        <nav className={style.nav}>

            <NavLink to='/'>
                
                <img className={style.logo} src={StudyAdvisorCompleteLogo} alt="Study Advisor Logo" />

            </NavLink>


            <ul id="ul_not_responsive">

                {currentUser ?

                    <li><img src={currentUser.photoUrl ? currentUser.photoUrl : UserImg} /></li>

                :
                <NavLink to='/signIn' style={{textDecoration: 'none'}}>
                    <li>Sign In</li>
                </NavLink>
                }

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