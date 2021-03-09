let name=document.querySelector('#name');
let age=document.querySelector('#age');
let email =document.querySelector('#email')
let check =document.querySelector('.check');
let form= document.querySelector('[name="signUp"]')

form.addEventListener('submit', function(event){
  const agree= confirm (`conform your deatils: ${name.value}, ${age.value}, ${email.value}`);
  

  if (!agree){
    event.preventDefault();
  }
  else {
    document.querySelector('h2').innerText='congratulations you successfully sent this form';
    event.preventDefault();
  }
});