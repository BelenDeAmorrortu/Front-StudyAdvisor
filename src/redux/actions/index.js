import axios from 'axios'

export function getCardGroups(){

    return async(dispatch)=>{

        try{

            const cardGroups = await axios.get('http://localhost:3003/CardGroup')
            
            return dispatch({type: 'GET_CARD_GROUPS', payload: cardGroups.data })

        }
    
        catch(e){
    
            throw Error(e.response.data)
        }

    }

}

export function createNewCardGroup(name){

    return async(dispatch)=>{

        try{

            const newGroup = await axios.post(`http://localhost:3003/CardGroup?name=${name}`)
            
            return dispatch({type: 'CREATE_CARD_GROUP'})

        }
    
        catch(e){
    
            throw Error(e.response.data)
        }

    }

}

export function deleteCardGroup(id){

    return async(dispatch)=>{

        try{

            const groupToDelete = await axios.delete(`http://localhost:3003/CardGroup/${id}`)

            return dispatch({type: 'DELETE_CARD_GROUP'})
        }

        catch(e){

            throw Error(e.response.data)
        }
    }
}

export function getFlashCards(id){

    return async(dispatch)=>{

        try{

            const flashCards = await axios.get(`http://localhost:3003/Card/${id}`)

            return dispatch({type: 'GET_FLASH_CARDS', payload: flashCards.data})
        }

        catch(e){

            throw Error(e.response.data)
        }
    }
}

export function createFlashCard(id, input){

    return async(dispatch)=>{

        try{
            const newFlashCard = await axios.post(`http://localhost:3003/Card?CardGroupId=${id}`, input)
        
            return dispatch({type: 'CREATE_FLASH_CARD'})
        }
        catch(e){

            throw Error(e.response.data)
        }
    }

}


export function deleteFlashCard(id){

    return async(dispatch)=>{

        try{
            const deleteFlashCard = await axios.delete(`http://localhost:3003/Card/${id}`)
        
            return dispatch({type: 'DELETE_FLASH_CARD'})
        }
        catch(e){

            throw Error(e.response.data)
        }
    }

}

export function getSummaries(){

    return async(dispatch)=>{

        try{
           
            const summaries = await axios.get('http://localhost:3003/Summary')
           
            return dispatch({type: 'GET_SUMMARIES', payload: summaries.data})
        }

        catch(e){

            throw Error(e.response.data)
        }

    }
}

export function createSummary(name){

    return async(dispatch)=>{

        try{
           
            const newSummary = await axios.post(`http://localhost:3003/Summary?name=${name}`)
           
            return dispatch({type: 'CREATE_SUMMARY'})
        }

        catch(e){

            throw Error(e.response.data)
        }

    }
}

export function deleteSummary(id){

    return async(dispatch)=>{

        try{
            const deleteSummary = await axios.delete(`http://localhost:3003/Summary/${id}`)
        
            return dispatch({type: 'DELETE_SUMMARY'})
        }

        catch(e){
            
            throw Error(e.response.data)
        }
    }
}