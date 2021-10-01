import React from "react";
import AppCliente from "./AppCliente";
import AppTrabajador from "./AppTrabajador";
import AppContext from "../../Context/AppContext";
export default function AppIndex() {
  const {User}=React.useContext(AppContext)
  console.log(User)
  return User.rol == "Cliente" ? <AppCliente /> : <AppTrabajador />
}
