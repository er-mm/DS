// LIFO principal
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

export default class Stack {
    private data: any[];
    constructor(){
        this.data = [];
    }

    add(record: any){
        this.data.push(record);
    }

    remove() {
        return this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    showList() {
        return this.data;
    }
}

const s = new Stack();
  s.add(1);
  s.add(2);
  console.log(s.showList())
  s.remove(); // returns 2
  console.log(s.showList())
  s.remove(); // returns 1
  console.log(s.showList())