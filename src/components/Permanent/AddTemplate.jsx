import React, { useState } from 'react'
import style from '../../StyleSheets/Permanent/AddTemplate.module.scss'

export default function AddTemplate({ elementName, formImg, addForm, resetFormState, initialFormState, setDisplay, display}) {
    
    function showForm(){

        setDisplay('flex')
    }

    function handleOnClose(){

        setDisplay('none')
        resetFormState(initialFormState)
    }

    return (

        <div className={style.container}>

            <div className={style.add_new_button} onClick={showForm}> 

                <span>+</span>
                <span>Add new {elementName}</span>

            </div>

            <div className={style.new_element_form} style={{display: display}} >

                <img src={formImg} />

                <div className={style.form}>

                    <h3>New {elementName}</h3>

                    {addForm}

                </div>
                <button className={style.close_form_button} onClick={handleOnClose}>X</button>


            </div>
        
        </div>
    )
}
