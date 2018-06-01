// 3. Delete duplicate items in an array -- we covered the brute force approach in class and wrote code for it. Can you improve it?
// <Linked lists>
// Linked List: Q1. Delete an item from a linked list
// examples:
//
// List = HEAD > 1 > 3 > 6 > -1 > 8 > NULL
//
// Delete (3)
//
// Updated list = HEAD > 1 > 6 > -1 > 8 > NULL
//
// Delete (8)
//
// Updated list = HEAD > 1 > 6 > -1 > NULL
//
// Delete (1)
//
// Updated list = HEAD > 6 > -1 > 8 > NULL
//
// Consider what will be the input and output (if-any) of your function.

function Node(data) {
    this.data = data;
    this.next = null;
};

function remove(head,data) {
  let currentNode = head;

  while (currentNode.next !== null) {
    //console.log(currentNode.next);
    if (currentNode.next.data === data) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
}

function createLinkedList() {
  let head = new Node(null);
  let node1 = new Node(1);
  let node2 = new Node(6);
  let node3 = new Node(-1);
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = null;
  return head;
}

function printLinkedList(head) {
  let currentNode = head;
  let array = [];
  while (currentNode.next !== null) {
    array.push(currentNode.next.data);
    currentNode = currentNode.next;
  }
  console.log(array);
}

let head = createLinkedList();
printLinkedList(head);
let newHead = remove(head,1);
printLinkedList(newHead);
// HW1: Linked List: Q2. Rearrange linked list so that all even positioned nodes are together
// Input:     1 > 7 > 5 > 4
// Output:  1 > 5 > 7 > 4
//
// Input:     0 > 32 > 17 > 5 > 57
// Output:  0 > 17 > 57 > 32 > 5

function Node(data) {
    this.data = data;
    this.next = null;
};
function createLinkedList() {
  let head = new Node(null);
  let node1 = new Node(1);
  let node2 = new Node(6);
  let node3 = new Node(-1);
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = null;
  return head;
}

function printLinkedList(head) {
  let currentNode = head;
  let array = [];
  while (currentNode !== null) {
    array.push(currentNode.data);
    currentNode = currentNode.next;
  }
  console.log(array);
}

function rearrangeList(head) {
  let evenHead = new Node(null);
  let evenList = evenHead;
  let oddHead = new Node(null);
  let oddList = oddHead;
  let currentNode = head;
  let isEven = true;
  while (currentNode.next !== null) {
    if (isEven) {
      let nextNode = new Node();
      evenList.next = nextNode;
      evenList = evenList.next;
      evenList.data = currentNode.next.data;
      isEven = false;
    } else {
      let nextNode = new Node();
      oddList.next = nextNode;
      oddList = oddList.next;
      oddList.data = currentNode.next.data;
      isEven = true;
    }
    currentNode = currentNode.next;
  }
  printLinkedList(evenHead);
  printLinkedList(oddHead);
  evenList.next = oddHead.next;
  printLinkedList(evenHead);
  return evenHead;
}

let head = createLinkedList();
printLinkedList(head);
rearrangeList(head);


//Mathod 2:

function Node(data) {
    this.data = data;
    this.next = null;
};
function createLinkedList() {
  let head = new Node(null);
  let node1 = new Node(1);
  let node2 = new Node(6);
  let node3 = new Node(-1);
  head.next = node1;
  node1.next = node2;
  node2.next = node3;
  node3.next = null;
  return head;
}

function printLinkedList(head) {
  let currentNode = head;
  let array = [];
  while (currentNode !== null) {
    array.push(currentNode.data);
    currentNode = currentNode.next;
  }
  console.log(array);
}

function rearrangeList(head) {
  let evenHead = new Node(null);
  let evenList = evenHead;
  let oddHead = new Node(null);
  let oddList = oddHead;
  let currentNode = head;
  let isEven = true;
  while (currentNode.next !== null) {
    if (isEven) {
      evenList.next = currentNode.next;
      evenList = evenList.next;
      isEven = false;
    } else {
      oddList.next = currentNode.next;
      oddList = oddList.next;
      isEven = true;
    }
    currentNode = currentNode.next;
  }

  evenList.next = null;
  oddList.next = null;

  printLinkedList(evenHead);
  printLinkedList(oddHead);
  evenList.next = oddHead.next;
  printLinkedList(evenHead);
  return evenHead;
}

let head = createLinkedList();
printLinkedList(head);
rearrangeList(head);
