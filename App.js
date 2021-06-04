
import React from 'react';
import {AuthContext} from './src/AuthContext'
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigation/Root'
import { set } from 'react-native-reanimated';



export default function App() {

  // Seteo El token de Sesion y la pantalla de carga
const [isLoading, setIsLoading] = React.useState(true);
const [userToken, setUserToken] = React.useState(null);
const [UserRol, setUserRol] = React.useState(null);

// Incializo las funciones del contexto
const authContext = React.useMemo(() => {
  return {
    signIn: (rol) => {
      setIsLoading(false);
      setUserToken("asdf")
      setUserRol(rol)
      console.log("llegue")
    },
    signUp: () => {
      setIsLoading(false);
      setUserToken("pepe")
      setUserRol("Cliente")
    },
    signOut: () => {
      setIsLoading(false)
      setUserToken(null)
    },
  };
}, []);

// Seteo timer de la pantalla de Carga 
React.useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1);
}, []);

  if(isLoading){
    return <Text>Hola</Text>
  }

  return (
    <AuthContext.Provider value={authContext}>


      <NavigationContainer>
        <RootStack  userToken={userToken} userRol={UserRol}/>
      </NavigationContainer>

    </AuthContext.Provider>
  );
}


