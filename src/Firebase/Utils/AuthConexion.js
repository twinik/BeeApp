 import { link } from '../config.json';
 import axios from 'axios';


 // conectarse a api usando axios


 async function obtenerUsuario(uid) {
     var resultado;
     var url = `${link}/Auth/obtener/${uid}`;
     try {
         var res = await axios.get(url)
         if(res.status == 200){
            resultado = res.data;
         } else{
          throw 0
        }
     } catch (error) {
         throw error
     }
     return resultado;
 }



 export { obtenerUsuario };