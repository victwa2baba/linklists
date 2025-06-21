import "./style.css";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";


class Node {
  constructor (data, nextNode) {
    this.data = data;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  append (data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.tail = newNode;
    } else {
      let current = this.tail;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode; 
    }
    this.length++;
  }
  prepend (data) {
    const preNode = new Node(data);
    if (!this.head) {
      this.head = preNode;
      preNode.nextNode = this.tail;
    } else {
      this.tail = this.head;
      this.head = preNode;
      preNode.nextNode = this.tail;
    }
    this.length++
    return this;
  }

  size () {
    return `Number of Items: ${this.length}`;
  }

  heads () {
    return this.head ? `The head is: ${this.head.data}` : 'No item here!';
  }

  lastTail () {
    let current = this.tail ? this.tail : this.head; 
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.data;
  }

  at (index) {
    let current = this.head;
    while (index > 0 ) {
      current = current.nextNode;
      index--;    
    }
    return current.data;
  }
  popOut() {
     if (!this.head) return;
     if (!this.head.nextNode) {
        this.head = null;
        return;
     }
     let current = this.head;
     while (current.nextNode.nextNode) {
        current = current.nextNode;
     }
     current.nextNode = null;
     return current;
  }

  containIn(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) return true;
        current = current.nextNode;
    }
    return false;
  }

  find (value) {
    let current = this.head;
    while (current) {
      if (current.data === value) return current;
      current = current.nextNode;
    }
    return false;
  }

  to_String() {
    let current = this.head ? this.head : this.tail;
    let str = "";
    while (current) {
      str += `( ${current.data} ) -> `;
      current = current.nextNode;
    }
    return str + null;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("goat");
list.prepend("cow");
list.prepend("bird");
console.log(list.to_String());
console.log(list);
console.log(list.size());
console.log(list.heads());
console.log(list.lastTail());
console.log(list.at(5));
console.log(list.popOut());
console.log(list.containIn("cow"));
console.log(list.find("cow"));