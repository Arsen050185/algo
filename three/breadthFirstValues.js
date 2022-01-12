class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.rigth = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.rigth = c;
b.left = d;
b.rigth = e;
c.rigth = f;

const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }
  const values = [];
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.rigth !== null) {
      queue.push(current.rigth);
    }
  }

  return values;
};

// always write iterative brathFirsth solution

console.log(breadthFirstValues(a));
