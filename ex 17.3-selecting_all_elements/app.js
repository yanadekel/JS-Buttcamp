const div = document.querySelectorAll("div");


  for (let i=0;i<div.length;i++) {
    div[i].style.backgroundColor="red";

  }


  div.forEach(function(el){
    el.style.backgroundColor="red";
  })


