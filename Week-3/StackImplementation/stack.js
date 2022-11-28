function createStack(){
    let items = [];
    return {
        pop(){
            if(this.isEmpty()){
                return 'Underflow'
            }
         return items.pop();
        },
        push(item){
            items.push(item);
        },
        getStack(){
            return items;
        },
        peek(){
            return items[items.length - 1];
        },
        isEmpty(){
            return items.length == 0;
        },
        length(){
            return items.length;
        }
    }
}

let stack = createStack();

stack.push(3);
stack.push(3)
stack.push(4);
console.log(`Stack: ${stack.getStack()}  length:${stack.length()}`)
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.items)  // will give undefined as it is not accessible form outside
stack.pop();
console.log(`Stack: ${stack.getStack()}  length:${stack.length()}`)