import {DELETE_TOKEN,SET_TOKEN} from './types'



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
    
        
}

}