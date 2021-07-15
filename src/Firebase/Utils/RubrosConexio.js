import {link} from '../config.json';
import axios from 'axios';

async function obtenerRubro(id) {
  var resultado;
  await fetch(`${link}/Rubro/obtener/${id}`)
    .then((response) => response.json())
    .then((json) => {
      resultado = json;
    })
    .catch((error) => {
      console.error(error);
    });
  return resultado;
}


async function obtener4Rubros() {
  var resultado;
  await fetch(`${link}/Rubro/obtenerTodos`)
    .then((response) => response.json())
    .then((json) => {
      resultado = json;
    })
    .catch((error) => {
      console.error(error);
    });
  return resultado;
}


export { obtenerRubro };
