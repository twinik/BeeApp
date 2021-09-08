import Badge from "./Badge";
import React from "react";


export function Aprobado(){
    return(
        <Badge colorPrincipal="#5CC261" colorSecundario="#275729" label="Aprobado"/>
    )
} 

export function Cancelado(){
    return(
        <Badge colorPrincipal="#C25C5C" colorSecundario="#572927" label="Cancelado"/>
    )
} 

export function Pendiente(){
    return(
        <Badge colorPrincipal="#e6e6e8" colorSecundario="#83878f" label="Pendiente"/>
    )
} 