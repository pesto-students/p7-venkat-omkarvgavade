let obj = {
  fName:"Omkar",
  lName:"Gavade",
  instituteName:"DBATU"
}; 

function printFullName(age){
    console.log('my name is '+this.fName+" "+this.lName+` & my age is ${age}`)
};
function printEducation(education,timePeriod){
    console.log(`I have completed  ${education} from ${this.instituteName} between ${timePeriod}`)
}

printFullName.call(obj,24);
printEducation.apply(obj,['B.Tech in Mechanical Engineering','2017-2021']);

let bindedFunction = printFullName.bind(obj);
bindedFunction(24);
