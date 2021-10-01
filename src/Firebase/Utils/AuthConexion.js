 import { link } from '../config.json';
 import axios from 'axios';


 // conectarse a api usando axios


 async function obtenerUsuario(uid) {
     var resultado;
     var url = `${link}/Auth/obtener`;
     try {
         var res = await axios.get(url, {
            params: {
                token: uid
            }
         })
         if (res.status == 200) {
             resultado = res.data;
         } else {
             throw 0
         }
     } catch (error) {
         throw error
     }
     return resultado;
 }


 async function generarVerificacionTelefono(telefono) {
     var url = `${link}/Auth/generarVerificacionTelefono`;
     try {
         await axios.get(url, {
            params: {
                telefono: telefono
            }
         })
     } catch(error) {
         throw error
     }
 }
 async function verificarTelefono(telefono, codigo) {
     var url = `${link}/Auth/verificarTelefono`;
     try{
         await axios.get(url, {
            params: {
                telefono: telefono,
                codigo: codigo
            }
         })
     } catch(error) {
         throw error
     }
    }


 export { obtenerUsuario,generarVerificacionTelefono,verificarTelefono };