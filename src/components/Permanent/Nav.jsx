import React, { useState } from "react";
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

    const {currentUser, logOut} = useAuth()
    const {switchTheme, currentTheme} = useTheme()

    console.log(currentUser)

    const [display, setDisplay] = useState('translateX(150%)')

    function handleLogOut(){

        logOut()
        setDisplay('translateX(150%)')
    }

    return(

        
        <nav className={style.nav}>

            <NavLink to='/'>
                
                <img className={style.logo} src={StudyAdvisorCompleteLogo} alt="Study Advisor Logo" />

            </NavLink>


            <ul style={{flexDirection: currentUser ? 'row-reverse' : 'row'}}>

                {currentUser ?

                    <>
                    <li onClick={()=> setDisplay(display === 'translateX(0%)' ? 'translateX(150%)' : 'translateX(0%)')}><img src={currentUser.photoURL ? currentUser.photoURL : UserImg} /></li>
                    </>
                :
                <NavLink to='/signIn' style={{textDecoration: 'none'}}>
                    <li>Sign In</li>
                </NavLink>
                }

                <li onClick={()=> switchTheme()}><img src={currentTheme === 'dark' ? lightIcon : darkIcon} /></li>

            </ul>

            <div className={style.sideBar} style={{transform: display}}>
                <h3>{currentUser ? currentUser.displayName : null}</h3>
                <NavLink to='/summary'onClick={()=> setDisplay('translateX(150%)')}>
                    <p>My Summaries</p>
                </NavLink>
                <NavLink to='/FlashCards' onClick={()=> setDisplay('translateX(150%)')}>
                    <p>My Flash Cards</p>
                </NavLink>
                <button onClick={handleLogOut}>Log Out</button>
            </div>

        </nav>

    )


}