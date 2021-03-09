class Car {
  constructor(carCompany, carSpeed) {
    this.carCompany = carCompany;
    this.carSpeed = carSpeed;
    this.cars=[];
  }

  getCars(){
    return this.cars;
  }
  getName() {
    return this.carCompany;
  }


  getSpeed() {
    return this.carSpeed;
  }

  print() {
    console.log(`car company: ${this.carCompany} and her speed: ${this.carSpeed}`);
  }
  
  setSpeed(newSpeed) {
  return this.carSpeed= newSpeed;
  }

}



let toyota = new Car('toyota', 500);
let honda = new Car('honda', 100);
let suzuki= new Car('suzuki',800);
let cerion= new Car ('cerion',200);

let c= new Car();
c.cars.push(toyota);
c.cars.push(honda);
c.cars.push(cerion);
c.cars.push(suzuki);

// console.log(c.cars);

// toyota.print();
// console.log(toyota.setSpeed(700));

let carsArr=[toyota,honda,suzuki,cerion];

let maxSpeed= carsArr.reduce((max,val)=>{
  return max.carSpeed>val.carSpeed? max:val;
})

console.log(maxSpeed.print());

let sortCars= carsArr.sort((a,b)=>{
  return a.carSpeed-b.carSpeed;
});

console.log(sortCars);