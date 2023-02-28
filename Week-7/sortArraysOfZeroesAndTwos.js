

function sortArraysOfZeroesAndTwos(arr){

    let countOfZeroes = 0;
    let countOfOnes = 0;
    let countOfTwos = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
           countOfZeroes++;
        }else if(arr[i]==1){
           countOfOnes++;
        }else{
            countOfTwos++;
        }
    }
    for(let i=0; i<arr.length; i++){
        if(countOfZeroes > 0){
            arr[i] = 0;
            countOfZeroes--;
        }else if(countOfOnes > 0){
            arr[i] = 1;
            countOfOnes--;
        }else if(countOfTwos > 0){
            arr[i] = 2;
            countOfTwos--;
        }
    }
    console.log(arr);
}
sortArraysOfZeroesAndTwos([0,2,1,2,0]) //Time Complexity = O(N); Space Complexity = O(1)
sortArraysOfZeroesAndTwos([0,1,0])  //Time Complexity = O(N); Space Complexity = O(1)
