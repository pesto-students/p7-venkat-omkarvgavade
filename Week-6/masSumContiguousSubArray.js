function findMaxSumContSubArray(arr,l,r,sum){
   if(l<r){
     let currSum = 0;
     for(let i=l;i<r;i++){
        currSum += arr[i];
        if(currSum > sum){
            sum = currSum;
        }
     }
     return findMaxSumContSubArray(arr,l+1,r,sum);

   }else{
    return sum;
   }
}

let arr1 = [1,2,3,4,-10];
let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(findMaxSumContSubArray(arr1,0,arr1.length-1,0))
console.log(findMaxSumContSubArray(arr2,0,arr2.length-1,0));

// Time Complexity = O(n^2)
// space complexity = O(1)


// Kadane's algorithm
function maxSubArraySum(arr){
    let maxSoFar = Number.MIN_VALUE;
    let maxEndingHere = 0;

    for(let i=0; i<arr.length; i++){
        maxEndingHere += arr[i];
        if(maxSoFar < maxEndingHere){
            maxSoFar = maxEndingHere;
        }
        if(maxEndingHere < 0){
             maxEndingHere = 0;
        }
    }
    return maxSoFar;
}
console.log(maxSubArraySum([1,2,3,4,-10]));

// Time Complexity = O(n)
// space complexity = O(1)