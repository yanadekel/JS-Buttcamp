let agree = document.querySelector('#agree');
let makeImg = document.createElement('img');
makeImg.width = 250;
makeImg.height = 250;
makeImg.src = 'https://picsum.photos/200/300';
makeImg.style.visibility="hidden";

document.body.appendChild(makeImg);
console.log(makeImg);

agree.addEventListener('click', () => {
  if (agree.checked) {
    makeImg.style.visibility= 'visible';
    
  }else {
    makeImg.style.visibility = 'hidden'; 
  }
})