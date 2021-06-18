
import React,{useReducer,useState}from 'react'
import AppReducer from './AppReducer'
import AppContext from './AppContext'
import {SET_TOKEN,DELETE_TOKEN,RESET} from './types'
const AppState = (props) =>{

    const initialState= {
        token:null,
        user:null
    }

    const [state,dispatch] = useReducer(AppReducer,initialState)

    const SignIn = () =>{
        dispatch({
            type:SET_TOKEN,
            payload:"P234"
        })
        
    }
   
    const SignOut = ()=>{
        dispatch({
            type:DELETE_TOKEN,
            payload:null
        })
        
    }

    const SignUp = ()=>{

        dispatch({
            type:RESET,
            payload:""
        })

    }


    return (
        <AppContext.Provider value={{User:state.user,Token:state.token,SignIn,SignOut,SignUp}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState