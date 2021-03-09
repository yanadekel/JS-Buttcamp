const randomApi = 'https://dog.ceo/api/breeds/image/random';
const btnRandom = document.querySelector('#btnRandom');
const img = document.querySelector('#img');
const imgList = document.querySelector('#list-of-img');
const numOfImg = document.querySelector('#numOfImg');



// const Fetch =(url)=>{
//     return new Promise((resolve, reject) => {
//
//     })
// }

async function getRandomDogImage() {

    let result = await fetch(`${randomApi}/${numOfImg.value}`);
    let image = await result.json();

    console.log(image)

    // const allImages =  image.message.map((img) => {
    //     return img
    //  })
    // imgList.innerHTML = "";
    image.message.forEach((img) => {
        imgList.innerHTML += `<img id="img" width="100" height="100" src="${img}"/>`

    })


    // fetch(randomApi)
    //     .then((result)=>{
    //      return result.json()
    //     })
    //     .then((image)=>{
    //     console.log(image)
    //         img.src = image.message
    //     })

    // console.log(image)
    // img.src = image.message;
}


btnRandom.addEventListener('click', getRandomDogImage);
