import './style.css';

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let head = this.head;
    function recSearch(node = head) {
      if (node.nextNode === null) return node;
      return recSearch(node.nextNode);
    }
    recSearch().nextNode = new Node(value);
  }

  prepend(value) {
    let temp = new Node(value, this.head);
    this.head = temp;
  }

  size() {
    let head = this.head;
    function recursiveCount(node = head, index = 1) {
      if (node.nextNode === null) return index;
      return recursiveCount(node.nextNode, (index += 1));
    }
    return recursiveCount();
  }

  head() {
    return this.head;
  }

  tail() {
    let head = this.head;

    function recSearch(node = head) {
      if (node.nextNode === null) return node;
      return recSearch(node.nextNode);
    }
    return recSearch();
  }

  at(index) {
    let head = this.head;
    function recursiveFind(node = head, currentIndex = 0) {
      if (currentIndex === index) return node;
      return recursiveFind(node.nextNode, (currentIndex += 1));
    }
    return recursiveFind();
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
let theHeaaad = new Node('hi im head');
let theLiiist = new LinkedList(theHeaaad);
theLiiist.append('the netxt noddde');
theLiiist.append('the next neeext node');
theLiiist.append('the end lol');
theLiiist.prepend('THE NEW HEAD HAHAHA');
theLiiist.append('THIS STILL WORKS RIGHT');
console.log(theLiiist);
console.log(theLiiist.size());
console.log(theLiiist.head);
console.log(theLiiist.tail());
console.log(theLiiist.at(3));
