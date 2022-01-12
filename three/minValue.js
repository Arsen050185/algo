class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.rigth = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.rigth = c;
b.left = d;
b.rigth = e;
c.rigth = f;

const treeMinValue = (root) => {
  const stack = [root];
  let smallest = Infinity;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;
    if (current.left !== null) stack.push(current.left);
    if (current.rigth !== null) stack.push(current.rigth);
  }

  return smallest;
};

// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   const leftMin = treeMinValue(root.left);
//   const rightMin = treeMinValue(root.rigth);

//   return Math.min(root.val, leftMin, rightMin);
// };

console.log(treeMinValue(a));
