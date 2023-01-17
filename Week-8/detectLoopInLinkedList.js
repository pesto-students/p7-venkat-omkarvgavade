
let SingleLinkedList = require('./LinkedList.js')

function detectLoopInLinkedList(list,x) {
   let ll = new SingleLinkedList(list[0]);
    for(let i = 1; i < list.length; i++){
        ll.append(list[i]);
    }
    if(x < ll.size && x!=0){
        ll.node.next.next = ll.node;
    }
   if(ll.detectLoop()){
    console.log('Loop detected')
   }else{
    console.log('Loop not detected')
   }
}

detectLoopInLinkedList([1,2,3,4,5],6)