const randomApi = 'https://dog.ceo/api/breeds/image/random';
const btnRandom = document.querySelector('#btnRandom');
const img = document.querySelector('#img');
const imgList = document.querySelector('#list-of-img');
const numOfImg = document.querySelector('#numOfImg');


async function getRandomDogImage() {

  let result = await fetch(`${randomApi}/${numOfImg.value}`);
  let image = await result.json();

  console.log(image)
}


getRandomDogImage()