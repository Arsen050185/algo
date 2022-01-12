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

// const treeSum = (root) => {
//   if (root == null) return 0;
//   return root.val + treeSum(root.left) + treeSum(root.rigth);
// };

const treeSum = (root) => {
  if (root === null) return 0;
  let totalSum = 0;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.rigth !== null) {
      queue.push(current.rigth);
    }
  }

  return totalSum;
};

console.log(treeSum(a));
