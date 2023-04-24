const token = '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'; 
const username = 'matiasrrs25'; 

fetch(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Token ${token}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos de la respuesta y mostrarlos en tu página HTML
    const profileDiv = document.getElementById('github-profile');
    profileDiv.innerHTML = `
      <img src="${data.avatar_url}" alt="${data.name}" width="100">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <ul>
        <li>Followers: ${data.followers}</li>
        <li>Following: ${data.following}</li>
        <li>Public repos: ${data.public_repos}</li>
      </ul>
    `;
  })
  .catch(error => console.error(error));
