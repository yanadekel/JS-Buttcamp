class Animal {
  constructor(name,sound){
    this.animalName=name;
    this.animalSound=sound;
  }

  getName(){
    return this.animalName;
  }

  getSound(){
    return this.animalSound
  }

  print(){
    console.log (`the animal: ${this.getName()} and the sound she making: ${this.getSound()}`);
  }
}

let animal1= new Animal('dog', 'barking');
let animal2= new Animal('cat', 'mio');
let animal3= new Animal('bird', 'singing');

animal1.print();