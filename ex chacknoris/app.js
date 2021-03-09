
const baseEndpoint = "https://api.chucknorris.io/jokes/random";
const categoryEndpoint = `https://api.chucknorris.io/jokes/categories`;
const container = document.querySelector('.container');
const button = document.querySelector('button');
const text = document.querySelector('.text');
const dropdown = document.getElementById('locality-dropdown');
const qeury= "https://api.chucknorris.io/jokes/random?category="


const getjoks = async () => {
  let response = await fetch(qeury+dropdown.value);
  let data = await response.json();
  text.textContent =data.value;
}

const getcategory = async () => {
  let callApi = await fetch(categoryEndpoint);
  let data = await callApi.json();
  for (let i = 0; i < data.length; i++) {
   let myOption = document.createElement('option');
    myOption.text = data[i];
    myOption.value = data[i];
    dropdown.appendChild(myOption);
    
    
  }

}






button.addEventListener('click',getjoks)


