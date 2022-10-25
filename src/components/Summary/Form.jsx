import React from 'react'
import style from '../../StyleSheets/Summary/Form.module.scss'

export default function Form({handleOnClick, setName, name}) {

    return (

        <div className={style.form}>

            <input  
                type='text' 
                placeholder='File Name'
                value={name}
                onChange={e => setName(e.target.value)}/>
            <button onClick={()=> handleOnClick(name)}>Add</button>

                        
        </div>

    )
}
