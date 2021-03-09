let text = document.querySelector('#text');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let emoji = document.querySelector('#emoji');

function createImageNode() {
  let img = document.createElement('img');
  img.src = '/ex 18.1-smiley/png-clipart-sleeping-imoji-artwork-emoji-sleep-sticker-emoticon-kaomoji-smiley-miscellaneous-face.png';
  img.style.width = "100px";
  img.style.margin = "15px";
  img.class = 'emojiImg'
  return img;
}

check.addEventListener('click', () => {

  // initialize
  const number = parseInt(text.value);
  message.innerHTML = "";

  // if emoji has internal nodes (image class ='img' ) remove nodes

  let children = emoji.children;
  while(emoji.children.length>0){
  
    children[0].remove();
    
  }

  if (!number) {
    message.innerHTML = "⚠️ NO number";
  } else {
    for (let i = 0; i < number; i++) {
      emoji.appendChild(createImageNode());
    }
  }

})





