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
  try{
    var response = await axios.get(`${link}/Rubro/obtenerTodos`);
    resultado = response.data;
    if(response.status != 200){
      throw "Error al obtener los rubros";
    }

    resultado.map(function(item){
      item.id = item.id;
      item.nombre = item.nombre;
    });

  } catch(error) {
    throw error
  }
  console.log(resultado);
  return resultado;
}


export { obtenerRubro ,obtener4Rubros};
