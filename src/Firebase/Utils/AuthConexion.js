async function obtenerUsuario(uid) {
    var resultado
    await fetch(`http://192.168.0.12:8080/Auth/obtener/${uid}`).then((response) => response.json()).then((json) => {
        resultado=json
    }).catch((error) => {
        console.error(error);
    });
return resultado
}

export {obtenerUsuario};