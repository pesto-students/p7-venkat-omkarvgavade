function bestTimeToBuyAndSellStock(arr,l,profit){
    if(l<arr.length-1){
        let stockBuy = arr[l];
        for(let i=l+1;i<arr.length;i++){
             if(arr[i]>stockBuy && arr[i]-stockBuy > profit){
                profit = arr[i];
             }
        }
        return bestTimeToBuyAndSellStock(arr,l+1,profit);
    }else{
        return profit;
    }
}

console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4],0,0))
console.log(bestTimeToBuyAndSellStock([7,6,4,3,1],0,0));

//Time complexity = O(n^2)