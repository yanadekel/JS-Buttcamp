
function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;

 }



 Square.prototype.isSquare= function(){
  if (a===b && b===c && c===d){
  console.log true;
  }else{
    return false;
  }
  
 }




const sqe= new Square(20,30,40,30);

sqe.isSquare();


