async function obtenerRubro(id) {
  var resultado;
  await fetch(`https://young-oasis-25559.herokuapp.com/Rubro/obtener/${id}`)
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
