function pairWithGivenDifference(arr,b){
   let obj = {};

   for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]!=undefined){
        obj[arr[i]]+=1;
    }else{
        obj[arr[i]]=1;
    }
   }
   for(let key in obj){
    if(b-key != key){
         if(obj[key-b])return 1;
    }
   }
   return 0;
}
console.log(pairWithGivenDifference([5, 10, 3, 2, 50, 80],78))
console.log(pairWithGivenDifference([-10, 20],30));

//Time Complexity O(N)
// Space Complexity O(N)