//What is the output of the below problem and why?\

function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment, log];
}


const [increment, log] = createIncrement();

increment();
increment();
increment();



log(); //  o/p => Count is 0
/* reason => 
    let message = `Count is ${count}`; this statement at line no. 8 will get count when it is 0 as when createIncrement() invoked in 16
    even though count was increased by increment(); in line no 18 19 20 , it seems it will give output Count is 3 but as in runtime when
    createIncrement() invoked in line number 16 it has already got value of count as 0 that is why when log() is invoked in line number 24
    it will give Count is 0; 
       if we want o/p as Count is 3 then we have to call increment() function 3 times inside createIncrement function before line no 8 i.e let message = `Count is ${count}`;
*/