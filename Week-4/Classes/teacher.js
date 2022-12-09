let Person = function (){
 
}
Person.prototype.initialize = function(name,age){
    // console.log(name,age)
    // console.log("initialize")
    // console.log(this)
    this.name = name;
    this.age = age;
};

class Teacher extends Person {
    teach(subject){
      return `${this.name} is now teaching ${subject}`
    }
}

let him = new Teacher();
him.initialize("omkar",45);
console.log(him.teach("inheritance"))
