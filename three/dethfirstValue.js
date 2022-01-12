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

// const depthFirstValues = (root) => {
//   const result = [];
//   if (root === null) return [];
//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

// console.log(a);

function depthFirstValues(root) {
  if (root === null) return [];
  const rightValues = depthFirstValues(root.rigth);
  const leftValues = depthFirstValues(root.left);
  return [root.val, ...leftValues, ...rightValues];
  console.log({ rigth, left });
}
console.log(depthFirstValues(a));
