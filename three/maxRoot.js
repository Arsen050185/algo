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

const maxRoot = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.rigth === null) return root.val;
  const maxChild = Math.max(maxRoot(root.left), maxRoot(root.rigth));
  return root.val + maxChild;
};

console.log(maxRoot(a));
