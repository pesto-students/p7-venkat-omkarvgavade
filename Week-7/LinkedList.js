// to create node

class Node {
    constructor(value,next){
        this.value = value;
        this.next = next === undefined ? null: next;
    }
};


// to create single linked list

class SingleLinkedList{
    constructor(value,next){
        if(value == undefined){
            throw new Error("Value can not be empty.")
        }
        this.node = new Node(value,next);
        this.size = 1;
    }

    append(value,next){
        let newNOde = new Node(value,next);
        if(this.node.next!==null){
            let temp = this.node;
            while(temp.next!==null){
                temp = temp.next;
            };
            temp.next = newNOde;
            this.size+=1;
        }else{
            this.node.next = newNOde;
            this.size+=1;
        }
    }

    print(){
      let tempArr = ["head"];
      let temp = this.node;
      while(temp.next!==null){
        tempArr.push(temp.value);
        temp = temp.next;
      }
      tempArr.push(temp.value,"end")
      console.log(tempArr.join(" --> "))
    }

    insert(value,index){
        let newNode = new Node(value);
        if(index<1){
            throw new Error("insert position can not be less than 1");
        }
        index-=1;
        if(index == 0){
           let temp = this.node;
           newNode.next = temp;
           this.node = newNode;
           this.size+=1;
        }else{
            let prev = this.node;
            let next = prev.next;
            let tempIndex = 1;
            while(next.next!=null){
               if(tempIndex==index){
                prev.next = newNode;
                newNode.next = next;
                this.size+=1;
                return;
               }else{
                next = next.next;
                prev = prev.next;
                tempIndex+=1
               }
            }
            if(tempIndex==index){
                prev.next = newNode;
                newNode.next = next;
                this.size+=1;
                return;
            }
        }
    }
    isEmpty(){
        if(!this.node.value){
            return true;
        }
        return false;
    }
    reverse(){
        let prev = null;
        let current = this.node;
        let next = null;
        // console.log(prev,current,next);
        while(current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.node = prev;
        return this.node;
    }
    rotateLeft(k){
        if(k > this.size){
           k = k % this.size;
        }
        if(k == this.size){
            return this.node;
        }else{
         let temp = this.node;
         let head = this.node;
         let prev = null;
         let index = 1;
          while(temp.next!=null){
             temp=temp.next;
             index++;
             if(index == k){
                prev = temp;
             }
          }
          if(k == 1){
            prev = head;
          }
          let newHead = prev.next;
          temp.next = head;
          prev.next = null;
          this.node = newHead;
          return newHead;
        }

    }
    detectLoop(){
        let slowNode = this.node;
        let fastNode = this.node;
        while(slowNode != null && fastNode != null && fastNode.next != null){
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
            if(slowNode.value == fastNode.value){
                return true;
            }
        }
        return false;
    }
}


// let ll = new SingleLinkedList(2);
// ll.append(4);
// ll.append(7);
// ll.insert(9,2);
// ll.append(8);
// ll.append(9);
// ll.insert(10,2);
// ll.print()
// console.log(ll.rotateLeft(4));
// ll.print()
// console.log(ll)


// for detecting loop in linked list
// ll.node.next.next = ll.node;
// console.log(ll.detectLoop());
// ll.print()

module.exports = SingleLinkedList;