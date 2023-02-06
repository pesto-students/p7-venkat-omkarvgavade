//[1,2,3,4,5] k 10

function threeSum(arr,k){
   arr = arr.sort((a,b)=>{
    return a-b;
  });

  let i = 0;
  let finalDiff = Number.MAX_VALUE;
  let finalSum;
  while(i<arr.length-2){
     let l = i+1;
     let r = arr.length-1;
     while(l<r){
        let currentSum = arr[i]+arr[l]+arr[r];
        let currentDiff = Math.abs(k-currentSum);
        if(currentDiff<finalDiff){
            finalDiff = currentDiff;
            finalSum = currentSum;
            l++;
        }else if(currentDiff == finalDiff){
            return k;
        }else{        
            r--;
        }
     }

     i++;
  }
  return finalSum;

}

console.log(threeSum([-1,2,1,-4],1))
console.log(threeSum([-1,0,1,2,-1,-4],3))
console.log(threeSum([12, 3, 4, 1, 6, 9],24))
console.log(threeSum([1, 2, 3, 4, -5],10))

//TIME complexity = O(N^2)
//space complexity = O(1)