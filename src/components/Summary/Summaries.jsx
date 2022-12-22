import React, { useState, useEffect } from "react";
import style from '../../StyleSheets/Summary/Summaries.module.scss'
import svgForm from '../../images/undraw_process_re_gws7.svg'
import AddTemplate from "../Permanent/AddTemplate";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { createSummary, getSummaries, deleteSummary} from "../../redux/actions";
import DocumentImg from '../../images/document-icon.svg'
import Card from "../Permanent/Card";
import { useAuth } from "../../contexts/AuthContext";

export default function Summaries() {

    const { currentUser } = useAuth()

    const dispatch = useDispatch()
    const summaries = useSelector(state => state.summaries)

    const [name, setName] = useState('')
    const [display, setDisplay] = useState('none')

    useEffect(()=>{

        window.scrollTo(0,0)
        // dispatch(getSummaries())
        if(currentUser) dispatch(getSummaries(currentUser.uid))

    }, [])

    function handleOnClick(name){

        dispatch(createSummary({name, userId: currentUser.uid}))
        setDisplay('none')
        setName('')
        dispatch(getSummaries(currentUser.uid))
    }

    function handleDelete(id){

        dispatch(deleteSummary(id))
        setInterval(()=>{
            dispatch(getSummaries())
            // dispatch(getSummaries(currentUser.uid))

        }, 100)
    }

    return (

        <div className={style.summaries_container}>

            <AddTemplate elementName='Summary' formImg={svgForm} addForm={<Form handleOnClick={handleOnClick} setName={setName} name={name} />} resetFormState={setName} initialFormState='' setDisplay={setDisplay} display={display} />

            <div className={style.summaries_display}>

                {summaries.length > 0 ? summaries.map(summary => <Card name={summary.name} id={summary._id} imgUrl={DocumentImg} NavLinkUrl={`./${summary._id}`} handleDelete={handleDelete} key={summary._id} />) : <span className={style.message}>You don't have any summaries yet</span> }

            </div>

        </div>
    )
}