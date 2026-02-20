/**
 * This exercise focuses on traversing a linked list. 
 *  You are given a pointer to the data node of a linked list.
 *  The task is to print the  of each node, one per line.
 *  If the head pointer is null , indicating the list is empty, nothing should be printed.
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next; 
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.size = 0; 
    }
    // insert first Node
    insertNode(data) { 
        this.head = new Node(data, this.head); 
    }
    // insert last Node 
    // insert at index
    // get at index 
    // Remove at index 
    // clear list 
    // print list data
    printNodes() {
        let curr = this.head; 
        while(curr) {
            console.log(curr.data); 
            curr = curr.next;
            this.size++; 
        }
    }
}
const ll = new SinglyLinkedList(); 
ll.insertNode(90); 
ll.insertNode(400); 
ll.printNodes(); 
console.log(ll); 