// class for queue using two stacks
class queueUsingStack {
  constructor(value) {
    if (value) {
      this.items = [value];
      this.size = 1;
    } else {
      this.items = [];
      this.size = 0;
    }
  }
  enqueue(value) {
    let stack1 = this.items;
    stack1.push(value);
    this.items = stack1;
    this.size += 1;
  }

  dequeue() {
    let stack1 = this.items;
    let stack2 = [];
    if (this.isEmpty()) return "Underflow";

    while (stack1.length) {
      stack2.push(stack1.pop());
    }
    let dequeuedElement = stack2.pop();
    while (stack2.length) {
      stack1.push(stack2.pop());
    }
    this.items = stack1;
    this.size -= 1;
    return dequeuedElement;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// let q1 = new queueUsingStack(2);
// q1.enqueue(3)
// console.log(q1.dequeue())
// console.log(q1.dequeue())
// console.log(q1.dequeue())
// console.log(q1);

function inputOuputOpForQueue(arr) {
  let q1 = new queueUsingStack();
  let dequedElements = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      q1.enqueue(arr[i + 1]);
      i++;
    } else {
      let dequedElement = q1.dequeue();
      if (dequedElement == "Underflow") {
        dequedElements += -1 + " ";
      } else {
        dequedElements += dequedElement + " ";
      }
    }
  }
  dequedElements = dequedElements.trim();
  return dequedElements;
}

console.log(inputOuputOpForQueue([1, 2, 1, 3, 2, 1, 4, 2]));
console.log(inputOuputOpForQueue([1, 2, 2, 2, 1, 4]));
