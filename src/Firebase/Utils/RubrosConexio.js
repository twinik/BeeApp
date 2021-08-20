import { link } from "../config.json";
import axios from "axios";

async function obtenerRubro(id) {
  var resultado;

  try {
    var response = await axios.get(`${link}/Rubro/obtener/${id}`);
    if (response.status != 200) {
      throw "Error al obtener el rubro";
    }

    var resultado = response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
  return resultado;
}

async function obtenerRubros() {
  var resultado;
  try {
    var response = await axios.get(`${link}/Rubro/obtenerTodos`);

    if (response.status != 200) {
      throw "Error al obtener los rubros";
    }

    var resultado = response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
  return resultado;
}

async function obtener4Rubros() {
  var resultado;
  try {
    var response = await axios.get(`${link}/Rubro/obtenerTodos`);
    if (response.status != 200) {
      throw "Error al obtener los rubros";
    }

    var resultado2 = response.data;

    var resultado = await obtener4Aleatorios(resultado2);
  } catch (error) {
    console.log(error);
    throw error;
  }

  return resultado;
}

//obtener 4 elementos al azar de un array sin repetir
function obtener4Aleatorios(array) {
  var resultado = [];
  var i = 0;
  for (i = 0; i < 4; i++) {
    var aleatorio = Math.floor(Math.random() * array.length);

    while (resultado.includes(array[aleatorio])) {
      aleatorio = Math.floor(Math.random() * array.length);
    }
    resultado.push(array[aleatorio]);
  }
  return resultado;
}

export { obtenerRubro, obtener4Rubros, obtenerRubros };
