function memoize(fn) {
    let cache = {};
    return function (...args) {
       if(cache[`${[...args]}`]){
          return cache[`${[...args]}`];
       }
       let added = fn(...args);
       cache[`${[...args]}`] = added;
       return added;
    }
}
function findNoOfDivisibleByThree (a,b){
    let count = 0;
   for(let i = a; i <= b; i++){
     if(i%3==0){
        count++;
     }
   }
   return count;
}


let memoizeFindCount = memoize(findNoOfDivisibleByThree);
console.log(memoizeFindCount(7,100000));
console.log(memoizeFindCount(7,100000));
console.log(memoizeFindCount(8,909090909));
console.log(memoizeFindCount(8,909090909));

/* for checking time between two function calls
function manageTime (fn,...args) {
  let calledTime = new Date().getMilliseconds();
  console.log('Result: '+ fn(...args));
  console.log('Time taken to run: ' + (new Date().getMilliseconds() - calledTime) +' ms')
}
let memoizeFindMax = memoize(findMax);
manageTime(memoizeFindMax,0,90909090);
manageTime(memoizeFindMax,0,90909090);
*/