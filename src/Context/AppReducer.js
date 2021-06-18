import {DELETE_TOKEN,SET_TOKEN,RESET} from './types'



export default (state,action)=>{
const {payload,type}=action

switch(type){

    case SET_TOKEN:
        
        return{
            ...state,
            token:payload
        };
    case DELETE_TOKEN:
        
        return{
            ...state,
            token:null
        };
        case RESET:
        console.log("TO")
        return{
            ...state,
            token:"Reset"
        };
    
        
}

}