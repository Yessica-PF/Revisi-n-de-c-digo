const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // le agregue . porque es una clase
const $b = document.querySelector('.blog');
//const $l = document.querySelector('.location');

function displayUser(username) {
  
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); 
  console.log(data);
  console.log(response); 
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${(err)}` 
}

displayUser('stolinski').catch(handleError);
