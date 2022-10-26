import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNewCardGroup, getCardGroups } from '../../redux/actions'
import style from '../../StyleSheets/Summary/Form.module.scss'

export default function Form({name, setName, setDisplay }) {

    const dispatch = useDispatch()

    function handleOnClick(name){
        
        if(name === '') return
        dispatch(createNewCardGroup(name))
        dispatch(getCardGroups())
        setName('')
        setDisplay('none')

    }

    return (

        <div className={style.form}>

            <input  
                type='text' 
                placeholder='Card Set Name'
                value={name}
                onChange={e => setName(e.target.value)}/>
            <button onClick={()=> handleOnClick(name)}>Add</button>

                        
        </div>

    )
}