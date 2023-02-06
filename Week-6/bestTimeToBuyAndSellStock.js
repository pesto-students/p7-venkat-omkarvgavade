
function bestTimeToBuyAndSellStock(arr){
  let stack = [-1];
  let resultArray = [];
  arr = arr.reverse();
  let lastGreater = -1;
  // using stack for finding next max greater element
  for(let i = 0; i < arr.length; i++) {
     while(stack[stack.length - 1] < arr[i] && stack[stack.length - 1]!=-1){
        stack.pop();
     }
     if(stack.length>1){
        lastGreater = stack[stack.length - 1];
        let lastIndex = stack.length - 1;
        while(stack[lastIndex] >= lastGreater && lastIndex >= 1){
            lastGreater = stack[lastIndex];
            lastIndex--;
        }
     }
     if(stack.length>1){
        resultArray.push(lastGreater)
     }else{
        resultArray.push(stack[stack.length-1])
     }
     stack.push(arr[i]);
  }
  let profit = 0;
  for(let i = 0; i < resultArray.length; i++){
    if(resultArray[i]!=-1 && Math.abs(resultArray[i]-arr[i])>profit){
      profit = Math.abs(resultArray[i]-arr[i]);
    }
  }
  console.log(profit)
}
//Time complexity = O(n)   


bestTimeToBuyAndSellStock([7,1,5,3,6,4]);
bestTimeToBuyAndSellStock([7,6,4,3,1]);
