import {link} from '../config.json';

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

export { obtenerRubro };
