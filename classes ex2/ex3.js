class sortNum {
  constructor() {
    this.numList = [];
  }

  unian(sortNumber) {
    sortNumber = [...this.numList];
    let newSortArr = [...new Set(this.numList)];
    return newSortArr;
  }
  addNum(num) {
    if (this.isPrime(num) && !this.numList.includes(num)) {
      this.insert(num);
      return true;
    }
    return false;
  }
  isPrime(num) {
    if (num === 0 || num === 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;

  }

  insert(num) {
    if (this.numList.length === 0) {
      this.numList.push(num);
    }
    else {
      let isAdd = false;
      for (let i = 0; i < this.numList.length && !isAdd; i++) {
        if (num < this.numList[i]) {
          isAdd = true;
          this.numList.splice(i, 0, num)
        }
      }
      if (!isAdd) {
        this.numList.push(num)
      }

    }

  }

  removeNum(num) {
    let flag = false;
    for (let i = 0; i < this.numList.length; i++) {
      if (this.numList.includes(num)) {
        this.numList.splice(i, 1)
        flag = true;
      }
      return true;
    }
    return false;
  }

  getAll() {
    return this.numList;
  }

  print() {
    console.log(this.numList);
  }
}
let n1 = new sortNum();
n1.addNum(3);
n1.addNum(10);
n1.addNum(4);
n1.addNum(5);
n1.addNum(9);
n1.addNum(11);

n1.removeNum(4)
n1.removeNum(3)
n1.removeNum(4)

console.log(n1.unian([3, 4, 5, 6, 7, 8, 1]));

n1.print();