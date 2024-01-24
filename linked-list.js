/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    // set head and tail if they are null
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    // update previous tail to have next value of newNode
    this.tail.next = newNode;
    // update tail value 
    this.tail = newNode;
    // account for length
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(this.head){
      // if there is a value then set that value as next for the new node
      newNode.next = this.head;
      // set head to the new node
      this.head = newNode
      // account for length 
      this.length +=1
    }else{
      // if head is null set head and tail
      this.head = newNode
      this.tail = newNode
      this.length +=1
    }
  }

  /** pop(): return & remove last item. */

  pop() { 
   // check if the list is empty
  if (this.length !== 0) {
    // get tail value
    let val = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    // get the node before the tail
    let prev = this.getAtIdx(this.length - 2);
    // set prev.next to null, removing the tail
    prev.next = null;
    // update tail value
    this.tail = prev;
    // account for length
    this.length -= 1;
    // return removed value
    return val;
  }
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx>= this.length || 0){
      throw new Error('Invalid Index!!!')
    }
    let cur = this.head;
    let count = 0;
    while(cur !== null && count!= idx){
      count +=1;
      cur = cur.next;
    }
    // return value
    return cur.val
  }
  getAtIdx(idx) {
    if(idx>= this.length || 0){
      throw new Error('Invalid Index!!!')
    }
    let cur = this.head;
    let count = 0;
    while(cur !== null && count!= idx){
      count +=1;
      cur = cur.next;
    }
    // return node obj
    return cur
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx>= this.length|| idx<0){
      throw new Error('Invalid Index!!!')
    }
    // get the value at the idx
    let cur = this.getAtIdx(idx)
    // set the value
    cur.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // handle invalid idx
    if(idx >= this.length +1 || idx<0){
      throw new Error('Invalid Index!!!')
    }
    // add value to beginning of list of idx === 0
    if(idx === 0) return this.unshift(val);
    // add value to end if last idx
    if(idx === this.length) return this.push(val)

    // add to middle
    let prev = this.getAtIdx(idx-1)
    // create new node
    let newNode = new Node(val);
    // set new node next as prev next
    newNode.next = prev.next
    // set prev nect as new node 
    prev.next = newNode
    // account for length
    this.length +=1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // handle invalid index
    if(idx <0 || idx>= this.length){
      throw new Error('Invalid Index!!!')
    }
    // start idx removal 
    if(idx === 0){
      // get current head value 
      let val = this.head.val;
      // set head value to next value 
      this.head = this.head.next
      // account for length
      this.length-=1;
      // handle one element 
      if(this.length<2){
        if(this.length === 0){
          this.head = null;
          this.tail = null;
        }
        this.tail = this.head;
      }
      // return removed value 
      return val;
    }
    // middle idx removal
    // get idv value 
    let val = prev.next.val;
    // set prev.next to current node.next
    prev.next = prev.next.next;
    // account for length 
    this.length -=1
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    // return 0 if list is empty
    if(this.length === 0) return 0
    let total = 0
    let cur = this.head
    // while cur is not null
    while(cur){
      // add cur value and set cur to next node
      total+= cur.val
      cur = cur.next;
    }
    return total/this.length
  }
}

module.exports = LinkedList;

