import React from "react";
import Header from "./Header.jsx";
import Presentation from "./Presentation.jsx";
import Features from "./Features.jsx";
import Hat from '../../images/education-hat.svg'
import WhiteBoard from '../../images/inicio.svg'

export default function Home(){

    return(

        <>

            <Header />

            <Presentation 
            img={Hat}
            imgPosition='left'
            title={"What's Study Advisor?"}
            text={<p>Study Advisor is an e-learning website which provides a variety of study methods with the aim of each user finding the most efficient way to carry out their studies.</p>} 
            />

            
           <Presentation 
            img={WhiteBoard}
            imgPosition='right'
            title={"Studying Tools"}
            text={<p>We believe a dynamic study methodology is the best way to learn new concepts, thats why we offer features such as 
            a <span>Flash Card Generatior</span>, <span>Summary Editor</span> and a <span>Calendar</span> to keep your education as fun and orginized as possible.</p>} 
            />

            <Features />

        </> 
    )

}