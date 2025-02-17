import './style.css';

class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let head = this.head;
    function recSearch(node = head) {
      if (node.nextNode === null) return node;
      return recSearch(node.nextNode);
    }
    recSearch().nextNode = new node(value);
  }
}

class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
let theHeaaad = new node('hi im head');
let theLiiist = new linkedList(theHeaaad);
theLiiist.append('the netxt noddde');
theLiiist.append('the next neeext node');
theLiiist.append('the end lol');
console.log(theLiiist);
