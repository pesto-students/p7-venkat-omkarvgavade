async function * getResult() {
    let doTask1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(function (){
                return "this is task 1";
            });
        },1000)
    })
    yield await doTask1

    let doTask2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(function (){
                return "this is task 2";
            });
        },2000)
    })
    yield await doTask2;

    let doTask3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(function (){
                return "this is task 3";
            });
        },3000)
    })
    yield await doTask3;
}

let generator = getResult();
generator.next().then(({value,done}) => {
    console.log(value());
})
generator.next().then(({value,done}) => {
    console.log(value());
})
generator.next().then(({value,done}) => {
    console.log(value());
})