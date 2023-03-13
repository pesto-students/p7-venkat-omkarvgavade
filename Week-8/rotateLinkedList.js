
let SingleLinkedList = require('./LinkedList');


function rotateLinkedListToLeftByKplaces(list,k){
    let ll = new SingleLinkedList(list[0]);

    for(let i=1; i<list.length; i++){
        ll.append(list[i]);
    };
    ll.print();
    ll.rotateLeft(k);
    ll.print();
}

rotateLinkedListToLeftByKplaces([2,4,7,8,9],3)
console.log("----------------------------------------------------------------")
rotateLinkedListToLeftByKplaces([2,4,7,8,9],2)