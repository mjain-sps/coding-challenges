class Node {
  constructor(name) {
    this.name = name;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //this will push the element at end
  push(value) {
    //create new node
    const newNode = new Node(value);
    //if this is the first value, then this will be head and tail both
    if (!this.length) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //anyways we have to increment the length
    this.length = this.length + 1;

    return this;
  }

  //this will simply loop ever all the items in the Singly List
  traverse() {
    var currentValue = this.head;
    while (currentValue) {
      console.log(currentValue.name);
      currentValue = currentValue.next;
    }
  }
  //This method will delete the last element. i.e delete the tail and make tail -1 elemeent as new tail
  pop() {
    if (!this.length) return undefined;
    let i = 0;
    let currenElement = this.head;
    let secondLastElement = null;

    //basicall we
    while (i < this.length - 1) {
      secondLastElement = currenElement;
      currenElement = currenElement.next;
      i++;
    }
    console.log(secondLastElement);
    this.tail = secondLastElement;
    this.tail.next = null;
    this.length--;
    return currenElement;
  }

  //this basically ignores the 1st element and makes the head as the second element
  shifting() {
    if (!this.length) return undefined;
    if (this.length === 1) return;
    let temp;
    temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  //unshifting is basically adding a new node just before the head
  unshifting(value) {
    const newNode = new Node(value);
    const temp = this.head;
    this.head = newNode;
    this.head.next = temp;
  }

  //get method returns back the node value based on get(value or index ) which we receive as argument
  get(index) {
    if (!this.length) return undefined;
    if (index < 0 || index >= this.length) return undefined;
    let i = 0;
    let currentValue = this.head;

    while (i !== index) {
      currentValue = currentValue.next;
      i++;
    }
    return currentValue;
  }

  //setting the value of a node based on the index received as parameter
  set(updatedValue, index) {
    if (!this.length) return undefined;
    if (index < 0 || index >= this.length) return undefined;

    let i = 1;
    let currentVal = this.head;
    if (index === this.length) {
      this.tail.name = updatedValue;
    }
    if (index === 0) {
      this.head.name = updatedValue;
    }
    // while (i !== index || index !== this.length || index) {
    //   currentVal = currentVal.next;
    // }
    // currentVal.name = updatedValue;
  }
}

const list = new SinglyList();
list.push("hello");
list.push("my name");
list.push("is");
list.push("Madhur Jain");

list.traverse();

// console.log("pop methd", list.pop());
// console.log("traversing after pop");
// list.traverse();

// console.log("we will do shifting", list.shifting());
// console.log("traversing after shifting");

// console.log("doing unshifting");
// list.unshifting("First Line");
// list.traverse();

// console.log("trying to get a value based on node index");
// console.log(list.get(100));

console.log(" using set we will update value at a particular index");
console.log(list.set(3, "Kopal Jain"));
