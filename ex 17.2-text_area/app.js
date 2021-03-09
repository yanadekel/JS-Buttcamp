const text = document.querySelector('#text');
const check = document.querySelector('.check');
const span = document.querySelector('.error');





check.addEventListener(click,function checkLength(){
 
  if(text.value.length < 101 ){
   return span.style.display= "block"; 
  }
  else{
     return span.style.display = "none";
  }
})