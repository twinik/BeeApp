import axios from 'axios';
import { link } from '../config.json';


async function obtenerTrabajadoresFiltro(filtro) {
    var url = `${link}/Trabajador/obtenerPorFiltro`;
    var resultado;
    
    try {
      var res = await axios.get(`${link}/Trabajador/obtenerPorFiltro/`, {
        params: {
          filtros: { rubro: filtro },
        },
      });
      console.log(res.data)
      if (res.data.error) {
        resultado = null;
      } else if(res.data.length == 0){
        resultado = null;
      } else {
        resultado = res.data;
      }
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  
 export { obtenerTrabajadoresFiltro };
