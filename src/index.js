import './style.css';

console.log('hello world!');

class linkedList {
  constructor(head = null) {
    this.head = head;
  }
}

class node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
