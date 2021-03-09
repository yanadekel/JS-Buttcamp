const baseEndpoint = "https://dog.ceo/api/breeds/image/random";
const container = document.querySelector('.container');
// const input = document.querySelector('input');
const button = document.querySelector('button');
button.textContent = 'dog'
const img= document.querySelector('#img')



const getRandomphoto = async () => {
  let response = await fetch(baseEndpoint);
  let data = await response.json();
  console.log(data);
  img.src=data.massege;


}

button.addEventListener('click', getRandomphoto);