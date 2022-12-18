function hasDuplicate(arr){
    let set = new Set(arr);
    return set.size != arr.length;
}

console.log(hasDuplicate([1,2,3]))