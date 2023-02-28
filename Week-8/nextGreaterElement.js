

function findNextGreaterElement(arr){
  let stack = [-1];
   arr = arr.reverse();
  let nxtGrtElArr =[]
  for(let i=0; i<arr.length; i++){
      while(stack[stack.length-1]<=arr[i] && stack[stack.length-1] != -1){
         stack.pop();
      }
      if(stack[stack.length-1]>=arr[i] || stack[stack.length-1]==-1){
        nxtGrtElArr.push(stack[stack.length-1]);
      }
      stack.push(arr[i]);
  }
  console.log(nxtGrtElArr.reverse())
}

findNextGreaterElement([1,3,2,4])
findNextGreaterElement([1,1,1,1])
findNextGreaterElement([1,2,3,4])