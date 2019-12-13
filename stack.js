// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something,
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  remove(item) {
    if (!this.top) return // if empty
    let currItem = this.top
    let nextItem = currItem.next
    let prevItem = null
    // just looping
    while (currItem.data !== item) {
      prevItem = currItem
      currItem = nextItem;
      nextItem = nextItem.next
    }
    prevItem.next = nextItem
  }
}

// does my output look right?

function peek(stack) {


  return stack.top.data
}

function isEmpty(stack) {
  return (stack.top)? true: false
}

function display(stack) {
  if (!stack.top) return
  let currItem = stack.top
  let nextItem = currItem.next
  let output = [currItem.data]
  while (currItem.next !== null) {
    prevItem = currItem
    currItem = nextItem;
    nextItem = nextItem.next
    output.push(currItem.data)
  }
  return output
}
// display should return each item
function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack()
  for (let i = 0; i < str.length; i++){
    stack.push(str[i])
  }
  let reverse = display(stack).join('')
  if (reverse === str) {
    return true
  } else {
    return false
  }
}

function matchParentheses(str) {
  let tempStack = new Stack();
  for (let i=0; i<str.length; i++) {
    tempStack.push(str[i])
  }
  let countL = 0;
  let countR = 0;
  while(tempStack.top) {
    let test = tempStack.pop()
    if(test === '(') {
      countL++
    }
    else if(test === ')') {
      countR++
    }
  }
  return countL !== countR ? false : true
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function main() {
  const stack = new Stack()

  stack.push('D')
  stack.push('C')
  stack.push('B')
  stack.push('A')
  stack.remove('B')
  // console.log(stack)
  // console.log(display(stack))
  // console.log(is_palindrome('stack'))
  console.log(matchParentheses('()()')) // parans match => true
  console.log(matchParentheses('()(')) // parans dont match => false

}

main()
