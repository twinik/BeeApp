import React from "react";
import AppCliente from "./AppCliente";
import AppTrabajador from "./AppTrabajador";

export default function AppIndex({ rol }) {
  return rol == "Cliente" ? <AppCliente /> : <AppTrabajador />;
}
