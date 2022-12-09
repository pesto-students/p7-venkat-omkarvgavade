function Future(executer) {
  let onResolve;
  let onReject;
  let notFulfilled = false;
  let fulfilled = false,
    called = false,
    value;

  function resolve(val) {
    fulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      called = true;
      onResolve(val);
    }
  }
  function reject(val) {
    notFulfilled = true;
    value = val;
    if (typeof onReject === "function") {
      called = true;
      onReject(val);
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (fulfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (notFulfilled && !called) {
      called = true;
      onReject(value);
    }
    return this;
  };
  executer(resolve, reject);
}

// console.log(p1)

function randomNumber(max,min) {
  return (Math.random()* (max - min) * 2).toFixed(0);
}

let p1 = new Future((resolve, reject) => {
  let a = randomNumber(9,1);
  if (a % 5 == 0) {
    reject(a+" "+new Error("Rejected random number"));
  } else {
    resolve(a);
  }
})
  .then((el) => {
    console.log("then is called");
    console.log(el);
  })
  .catch((el) => {
    console.log("catch is called");
    console.log(el);
  });

// let p = new Promise((resolve) =>{
//   resolve(10);
//   resolve(20);
// }).then((el)=>{
//   console.log(console)
// })
// console.log(p)
