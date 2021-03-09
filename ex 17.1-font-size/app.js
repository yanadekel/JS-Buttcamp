


const p = document.querySelector('.text-box');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

// console.log (p);
console.log(plus);



plus.addEventListener('click', () => {
  let fontSize = parseInt(window.getComputedStyle(p).fontSize);
  fontSize += 10;
  if (fontSize <100) {
    p.style.fontSize = `${fontSize}px`
  }

});

minus.addEventListener('click', ()=> {
 let fontSize= parseInt(window.getComputedStyle(p).fontSize);
 fontSize -=1;

 if (fontSize > 6) {
  p.style.fontSize = `${fontSize}px`
}

})