import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteFlashCard, getFlashCards } from '../../redux/actions'
import style from '../../StyleSheets/FlashCards/FlashCard.module.scss'

export default function Card({id, question, options, answer, display}) {

    const [flip, setFlip] = useState(false)
    
    const dispatch = useDispatch()

    const {id: groupId} = useParams()

    function handleCardDelete(id){

        dispatch(deleteFlashCard(id))
        setInterval(()=>{
            dispatch(getFlashCards(groupId))
        }, 100)

    }
    return (

        <div className={`${style.card} ${flip ? style.flip : ''}`} onClick={() => display === 'none' ? setFlip(!flip) : null}>

            <button onClick={()=> handleCardDelete(id)} style={{display: display}}>X</button>

            <div className={style.front}>
                <h4>{question}</h4>

                {options.length > 0 ?
                
                <ul>
                    {options.map(o => <li key={o}>{o}</li>)}
                </ul>

                : null }

            </div>

            <div className={style.back}>
                <h4>{answer}</h4>
            </div>
        
        </div>
    )
}
