import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './FlashCard'
import style from '../../StyleSheets/FlashCards/FlashCards.module.scss'
import AddTemplate from '../Permanent/AddTemplate'
import { useState } from 'react'
import FormCard from './FormCard'
import FormSvg from '../../images/undraw_notes_re_pxhw.svg'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getFlashCards } from '../../actions'

export default function Cards(){

    const {id} = useParams()

    const dispatch = useDispatch()
    const group = useSelector(state => state.groupOnDisplay)

    useEffect(()=>{

        dispatch(getFlashCards(id))

    }, [])

    const [display, setDisplay] = useState('none')
    const [edit, setEdit] = useState('none')
    const [input, setInput] = useState({

        question: '',
        options: [ '', '', '', ''],
        answer: ''
    })

    function handleEditCards(){

        if(edit === 'none') setEdit('flex')
        else setEdit('none')
    }

    return (

        <div className={style.cards_container}>

            <AddTemplate elementName='flash card' formImg={FormSvg} addForm={<FormCard setInput={setInput} input={input} groupId={group._id} setDisplay={setDisplay} />} resetFormState={setInput} initialFormState={{question: '', options: ['', '', '', ''], answer: ''}} setDisplay={setDisplay} display={display}/>
            
            <button className={style.button} onClick={handleEditCards}>{ edit === 'none' ? 'Edit Flash Cards' : 'Done'}</button>

            <h2>{group.name}</h2>

            <div>
                {group.cards && group.cards.length > 0 ? group.cards.map(c => <Card key={c._id} id={c._id} question={c.question} options={c.options} answer={c.answer} display={edit} />) : <span className={style.message}>This group doesn't have any flash cards yet</span>}
            </div>
        
        </div>
    )
}
