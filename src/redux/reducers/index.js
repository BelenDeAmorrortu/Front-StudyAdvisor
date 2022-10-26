const initialState = {

    summaries: [],
    cardGroups: [],
    groupOnDisplay: {}
}

function rootReducer(state = initialState, action){

    
    switch(action.type){

        case 'GET_CARD_GROUPS':
            return{
                ...state,
                cardGroups: action.payload
            }

        case 'CREATE_CARD_GROUP':
            return{
                ...state
            }

        case 'DELETE_CARD_GROUP':
            return {
                ...state
            } 

        case 'GET_FLASH_CARDS':
            return{
                ...state,
                groupOnDisplay: action.payload
            } 
            
        case 'CREATE_FLASH_CARD':
            return{
                ...state
            }

        case 'DELETE_FLASH_CARD':
            return{
                ...state
            }
        
        case 'GET_SUMMARIES':
            return{
                ...state,
                summaries: action.payload
            }

        case 'CREATE_SUMMARY':
            return{
                ...state
            }

        
        case 'DELETE_MAGIC':
            return{
                ...state
            }

        default:
            return state;
    }
}

export default rootReducer