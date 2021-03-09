class SortNumber {
    constructor() {
        this.numList = [];
    }


    union(sortNumber){
        let newArr = [...this.numList];

        for(let i =0 ; i<sortNumber.numList.length ; i++){
            if(!newArr.includes(sortNumber.numList[i])){
                newArr.push(sortNumber.numList[i])
            }
        }

        console.log(newArr)

    }
    removeNum(num){
        let index = this.numList.indexOf(num)
        if(index > -1){
            this.numList.splice(index,1);
            return true;
        }
        return false;
    }

    share(sortNumber){
        let count=0;
        for(let i =0 ; i< this.numList.length ; i++){
           for(let k=0 ; k < sortNumber.numList.length ; k++){
               if(this.numList[i] === sortNumber.numList[k]){
                   count++;
               }
           }
        }
        return count;
    }

    addNum(num) {
        if(!this.isNotPrim(num) && !this.numList.includes(num)){
            this.insertByVal(num)
            return true;
        }
        return false;
    }

    isNotPrim(num) {
        if(num ===0 || num ===1){
            return true;
        }
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return true;
            }
        }
        return false;
    }

    insertByVal(num){
        if(this.numList.length ===0 ){ //if is the first num
            this.numList.push(num);
        }
        else{
            let isAdd =false;
            for(let i=0 ; i < this.numList.length && !isAdd ; i++){
                if(num <  this.numList[i]){
                    isAdd = true;
                    this.numList.splice(i,0,num)
                }
            }//end for
            if(!isAdd){
                this.numList.push(num)
            }
        }
        //[7,13]  =>11

    }

}
let sortNumbers1 = new SortNumber();
let sortNumbers2 = new SortNumber();
sortNumbers1.addNum(5);
sortNumbers1.addNum(11);
sortNumbers1.addNum(3);

sortNumbers2.addNum(11)
sortNumbers2.addNum(7)
sortNumbers2.addNum(13)
sortNumbers1.union(sortNumbers2)
// console.log(sortNumbers1.numList)
// console.log(sortNumbers2.numList)
//3,5,7
//3,7,11,13
//3,5,7,11,13
// console.log(sortNumbers1.share(sortNumbers2))
