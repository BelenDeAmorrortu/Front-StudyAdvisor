import React from "react";
import style from '../../StyleSheets/Permanent/Nav.module.scss'
import StudyAdvisorCompleteLogo from '../../images/complete logo.png'
import NavMenuIcon from '../../images/NavOptionsIcon.png'
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import UserImg from '../../images/user.png'
import { useTheme } from "../../contexts/ThemeContext";
import lightIcon from '../../images/light-icon.svg'
import darkIcon from '../../images/dark-icon.svg'


export default function Nav(){

    const {currentUser} = useAuth()
    const {switchTheme, currentTheme} = useTheme()

    return(

        
        <nav className={style.nav}>

            <NavLink to='/'>
                
                <img className={style.logo} src={StudyAdvisorCompleteLogo} alt="Study Advisor Logo" />

            </NavLink>


            <ul>

                {currentUser ?

                    <li><img src={currentUser.photoUrl ? currentUser.photoUrl : UserImg} /></li>

                :
                <NavLink to='/signIn' style={{textDecoration: 'none'}}>
                    <li>Sign In</li>
                </NavLink>
                }

                <li onClick={()=> switchTheme()}><img src={currentTheme === 'dark' ? lightIcon : darkIcon} /></li>

            </ul>

        </nav>

    )


}