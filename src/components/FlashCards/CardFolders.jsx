import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTemplate from '../Permanent/AddTemplate'
import FormFolder from './FormFolder'
import style from '../../StyleSheets/FlashCards/CardFolders.module.scss'
import FormSvg from '../../images/undraw_my_files_swob.svg'
import { useEffect } from 'react'
import { getCardGroups, deleteCardGroup } from '../../actions'
import Card from '../Permanent/Card'
import folderPng from '../../images/folder.png'

export default function CardFolders() {

    const dispatch = useDispatch()
    const cardFolders = useSelector(state => state.cardGroups)

    useEffect(()=>{

        dispatch(getCardGroups())
        
    }, [])

    const [display, setDisplay] = useState('none')
    const [name, setName] = useState('')

    function handleDelete(id){

        dispatch(deleteCardGroup(id))
        setInterval(()=>{
            dispatch(getCardGroups())
        }, 100)
    }

    return (

        <div className={style.cardFolders_container}>

            <AddTemplate elementName={'card set'} formImg={FormSvg} addForm={<FormFolder name={name} setName={setName} setDisplay={setDisplay} />} resetFormState={setName} initialFormState={name} setDisplay={setDisplay} display={display} />

            <div className={style.cardGroups_display}>

                {cardFolders ? cardFolders.map(g => <Card name={g.name} id={g._id} key={g._id} NavLinkUrl={`./CardGroup/${g._id}`} imgUrl={folderPng} handleDelete={handleDelete}/>) : <span>You haven't created any Card Group yet</span>}

            </div>

        </div>
    )
}
