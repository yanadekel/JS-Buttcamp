
(function(){





document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.boxSizing = 'border-box'
document.body.style.textAlign = 'center';

const header= document.createElement('header');
header.style.width = '100%';
header.style.height = '10vh';
header.style.backgroundColor = 'pink';
document.body.appendChild(header);


const myH1 = document.createElement('h1');
myH1.textContent='WELCOM TO MY SITE';
myH1.style.color= "white";
myH1.style.fontSize= '20px';
myH1.textContent = 'Welcome To My Website';
header.appendChild(myH1);


const main = document.createElement('main');
main.style.width = '100%'
main.style.height = '50vh'
main.style.backgroundColor = 'pink';
main.style.display = 'flex'
main.style.textAlign = 'center'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'
document.body.appendChild(main);

const mytext = document.createElement('p');
mytext.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam a recusandae reprehenderit, inventore atque provident placeat doloribus iure. Officiis rerum accusamus totam deleniti in culpa odio, dolorum ea dolore repellat aliquam ipsum odit consectetur tempora. Aut iure molestiae velit! Fuga provident tempora quasi! A, reiciendis similique sunt, enim alias accusantium dolorem non vitae, perferendis atque provident placeat. Illo, sunt! Doloremque labore tenetur voluptas autem quos! Assumenda iste tempore doloribus sapiente soluta incidunt provident asperiores harum laboriosam obcaecati, illum accusantium alias itaque nemo recusandae enim, laudantium delectus illo cumque reprehenderit eos. Officiis cum doloribus assumenda magni molestias, qui optio ex quam."
mytext.style.fontSize = '20px'
mytext.style.fontFamily = 'Arial, Helvetica, sans-serif'

main.appendChild(mytext);



})()




