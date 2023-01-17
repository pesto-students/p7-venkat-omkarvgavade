let SingleLinkedList = require('./LinkedList')

function reverseLinkedList(list) {
    let ll = new SingleLinkedList(list[0])
    for(let i = 1; i < list.length; i++) {
        ll.append(list[i])
    }
    ll.reverse()
    ll.print()
}

reverseLinkedList([1,2,3,4,5,6])