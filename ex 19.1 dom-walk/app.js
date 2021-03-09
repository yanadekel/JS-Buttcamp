// 1. Change the text from “title 2” to “main title”
const titel2= document.querySelector('.start-here');
titel2.innerText="main title";

let ul2LI= titel2.nextElementSibling.firstElementChild;

 


const sub4= document.createElement('li');
sub4.textContent="sub titel 4";
ul2LI.appendChild(sub4);



// 3. Delete the last <li> element from the list.

let titel3 = titel2.parentElement.lastElementChild;

titel3.remove();

// 4. Change the <title> element text to “Master Of The Dom”


let tagTitel= titel2.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
tagTitel.textContent= "Master Of The Dom";

let p= titel2.parentElement.nextElementSibling.firstElementChild;
p.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ipsam sint quod doloremque animi culpa."

