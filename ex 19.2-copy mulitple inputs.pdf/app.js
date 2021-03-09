let code = document.querySelector('h3').innerHTML.split("");
let evaluet = document.querySelector('.box');
let input = document.querySelectorAll('input');
let verifiction = document.querySelector('button');
let result = document.querySelector('h4');


let myArr = [];

const emptyVaule = () => {
  let currentchild = evaluet.firstElementChild;
  for (let i = 0; i < evaluet.children.length; i++) {
    currentchild.value = '';
    currentchild = currentchild.nextElementSibling;
  }
}

const runTest = (ar1, ar2) => {
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  } return true;
};

const check = () => {
  for (let i = 0; i < input.length; i++) {
    myArr.push(input[i].value)
  }
  if (runTest(code, myArr)) {
    myArr = [];
    result.innerHTML = 'Correct!'
  } else {
    myArr = [];
    emptyVaule();
    result.innerHTML = 'Wrong Code';
  }

}

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', () => {
    if (input[i].value && input[i].nextElementSibling) {
      input[i].nextElementSibling.focus();
    }
  })
}

evaluet.addEventListener('paste', (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  let pasteToArr = paste.split('');
  let currentchild = evaulet.firstElementChild;
  for (let i = 0; i < pasteToArr.length; i++) {
    currentchild.value = pasteToArr[i];
    currentchild = currentchild.nextElementSibling
  }
})

verifiction.addEventListener('click', check);