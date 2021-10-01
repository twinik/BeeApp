import React, { useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { SET_TOKEN, DELETE_TOKEN, RESET, SET_USER } from "./types";
import Firebase from "../Firebase/Firebase";
import { obtenerUsuario } from "../Firebase/Utils/AuthConexion";

const AppState = (props) => {
  const initialState = {
    token: null,
    user: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);
  /*
  const SignIn = async (email, password) => {
    var result = true;
    console.log("e:" + email + ",c=" + password.trim());

    try {
      var userCredential = await Firebase.auth().signInWithEmailAndPassword(
        email,
        password
      );
      var pl
     await userCredential.user.getIdToken(true).then((x)=>{
      pl=x
     })
      dispatch({
        type: SET_TOKEN,
        payload: pl,
      });
     
      var user = await obtenerUsuario(pl);
      dispatch({
        type: SET_USER,
        payload: user,
      });
    } catch (error) {
      console.log(error);
      result = false;
    }

    return result;
  };*/
  
  const SignIn = async (email, password) => {
    dispatch({
      type: SET_TOKEN,
      payload: "NASHE",
    });
    dispatch({
      type: SET_USER,
      payload: {
        nombre: "Lionel",
        apellido: "Messi",
        calificacion: 4.9,
        mail: "pulga10@gmail.com",
      },
    });
    return true;
  };

  const SignOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        console.log("deslogeado");
        dispatch({
          type: DELETE_TOKEN,
          payload: null,
        });
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const SignUp = () => {
    dispatch({
      type: RESET,
      payload: "",
    });
  };

  return (
    <AppContext.Provider
      value={{ User: state.user, Token: state.token, SignIn, SignOut, SignUp }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
