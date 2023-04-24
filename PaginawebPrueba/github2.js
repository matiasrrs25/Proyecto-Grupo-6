const token = 'TU_TOKEN'; // Reemplaza TU_TOKEN con tu token personal
const username = 'NOMBRE_DE_USUARIO'; // Reemplaza NOMBRE_DE_USUARIO con el nombre del usuario de GitHub que deseas mostrar

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Token ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos de la respuesta y mostrarlos en tu página HTML
    console.log(data);
  })
  .catch(error => console.error(error));
