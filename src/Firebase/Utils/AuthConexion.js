async function obtenerUsuario(uid) {
  var resultado;
  await fetch(`https://young-oasis-25559.herokuapp.com/Auth/obtener/${uid}`)
    .then((response) => response.json())
    .then((json) => {
      resultado = json;
    })
    .catch((error) => {
      console.error(error);
    });
  return resultado;
}

export { obtenerUsuario };
