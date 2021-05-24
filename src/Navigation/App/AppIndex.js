import React from 'react'
import AppCliente from './AppCliente'
import AppTrabajador from './AppTrabajador'

export default function AppIndex  ({navigation,route})  {
  
 const {rol} = route.params

  return(
    rol=="Cliente" ? <AppCliente/> : <AppTrabajador/>
  )

}