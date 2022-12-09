function fibonacciIterator() {
    let first = -1;
    let second = 0;
  
    return {
      next() {
        let result=first+second;
        if(first == -1){
            first = 0;
            return {value: 0,done: false}
        }else if(first == 0){
            first = 1;
            // second = result;
            return {value: 1,done: false}
        }else{
            result = first + second;
            first = second == 0 ? 1 : second;
            second = result;
            return {value:result,done:false}; 
         }
      }
    };
  }

  let p1 = fibonacciIterator();
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())
  console.log(p1.next())