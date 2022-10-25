import React, { useCallback, useEffect, useState} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../../StyleSheets/Summary/TextEditor.scss'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'

let toolbarOptions = [

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  
    [{ 'font': [] }],
    [{ 'color': [ '#42a2eb', '#6e44ff', '#b33c86', '#DC7F30', '#fff', '#000'] }, { 'background': ['#e3dae0', '#42a2eb', '#6e44ff', '#b33c86', '#DC7F30'] }],
    ['bold', 'italic', 'underline'],     
    [{ 'align': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],    
    [{ 'indent': '-1'}, { 'indent': '+1' }],     
    ['blockquote', 'image'],             
    [{ 'script': 'sub'}, { 'script': 'super' }]

];

const save_interval = 2000
const port = 3003

export default function TextEditor() {

    const {id: documentId} = useParams()

    const [socket, setSocket] = useState()
    const [quill, setQuill] = useState()

    useEffect(()=>{

        window.scrollTo(0,0)

        const s = io(`http://localhost:${port}`)

        s.on('connection')

        setSocket(s)

        return () =>{
            s.disconnect()
        }

    }, [])

    useEffect(()=>{

        if(!socket || !quill) return

        const interval = setInterval(()=>{

            socket.emit('save-document', quill.getContents())

            return ()=> clearInterval(interval)

        }, save_interval)

    }, [socket, quill])

    useEffect(()=>{

        if(!socket || !quill) return

        socket.once('load-document', document =>{

            quill.setContents(document)
            quill.enable()
        })

        socket.emit('get-document', documentId)

    }, [socket, quill, documentId])

    useEffect(()=>{

        if(!socket || !quill) return 

        const handler = (delta, oldDelta, source) =>{

            if(source !== 'user') return
            socket.emit('send-changes', delta)
        }

        quill.on('text-change', handler)

        return ()=>{
            quill.off('text-change', handler)
        }

    }, [socket, quill])

    useEffect(()=>{

        if(!socket || !quill) return 

        const handler = (delta) =>{

            quill.updateContents(delta)
        }

        socket.on('receive-changes', handler)

        return ()=>{
            socket.off('receive-changes', handler)
        }
        
    }, [socket, quill])

    const wrapperRef = useCallback((wrapper)=>{

        if(!wrapper) return

        wrapperRef.innerHTML = ""

        const editor = document.createElement('div')
        wrapper.append(editor)

        const q = new Quill( editor, {theme: 'snow', modules:{ toolbar: toolbarOptions}})

        q.disable()
        q.setText('Loading...')
        setQuill(q)

    }, [])

    return (

        <div className='container' ref={wrapperRef}>
        
        </div>
    )
}