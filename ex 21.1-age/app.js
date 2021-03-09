const text = document.querySelector('#text');
const check = document.querySelector('.check');
const error = document.querySelector('.error');







check.addEventListener('click', function checkage(){
 
  if(text.value < 18 ){
    error.textContent = "you’re too young"; 
  }
  else if (text.value>=18){
     error.textContent= "you can drink appear"; 
  }else  {
    error.textContent= "not valid"; 
  }

})