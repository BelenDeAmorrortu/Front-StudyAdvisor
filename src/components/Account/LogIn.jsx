import React, { useEffect, useState } from 'react'
import style from '../../StyleSheets/Account/LogIn.module.scss'
import LogInSVG from '../../images/LogIn.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAuth } from '../../contexts/AuthContext'

export default function LogIn() {

    const [display, setDisplay] = useState('none')

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])

    const { signUp } = useAuth()

    function handleSignUp(e){

        e.preventDefault()
        if(password !== confirmPassword) return alert("passwords don't match")
        signUp(email, password)

    }

    function showRegistrationForm(e){

        e.preventDefault()
        if(display === 'none') setDisplay('flex')
        else setDisplay('none')

        document.getElementById('register').scrollIntoView()
    }
    
    return(

        <div className={style.login_container}>

            <div className={style.login}>

                    
                <div className={style.img_div} data-aos='fade-right'> 

                    <img src={LogInSVG} alt="Log In Ilustration" />

                </div>


                <div className={style.form_flex}>

                    <form>

                        <h4>Sign In</h4>

                        <div className={style.form_section}>

                            <input type="email" placeholder="Email" />

                        </div>

                        <div className={style.form_section}>

                            <input type="password" placeholder="Password" />

                        </div>

                        <div className={style.form_section}>

                            <button>Submit</button>
                            <button onClick={e => showRegistrationForm(e)} className={style.register_button}>Sign Up</button>

                        </div>

                    </form>

                </div>
            </div>

            <div className={style.registration} style={{display: display}} id='register'>

                <form>
                    <h4>Sign Up</h4>

                    <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} name='username' placeholder='Username'/>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='Email'/>
                    <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}name='password' placeholder='Password'/>
                    <input type='password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}name='confirmPassword' placeholder='Confirm Password'/>
                    <button onClick={(e)=> handleSignUp(e)}>Submit</button>
                </form>

            </div>
        
        </div>
    )
}
