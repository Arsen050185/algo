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

// const treeIncludes = (root, target) => {
//   if (root === null) return [];
//   const queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     if (current.val === target) return true;
//     if (current.left) queue.push(current.left);
//     if (current.rigth) queue.push(current.rigth);
//   }
//   return false;
// };

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.rigth, target);
};
console.log(treeIncludes(a, "e"));
