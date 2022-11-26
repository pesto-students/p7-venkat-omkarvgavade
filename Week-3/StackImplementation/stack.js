class Stack {
  
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
        this.length = this.items.length;
    }

    pop(){
      if(this.items.length == 0){
        return 'Stack is empty';
      }
      this.length = this.items.length-1;
      return this.items.pop();
    }
    push(item){
        this.items.push(item);
        this.length = this.items.length;
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        if(this.items.length == 0){
            return true;
        }
        return false;
    }
 

}
let stack = new Stack();
stack.push(2)
stack.push(4)
stack.push(5)
stack.push(6)

stack.pop();
console.log(stack.isEmpty())
console.log(stack);
console.log(stack.length)
console.log(stack.peek());