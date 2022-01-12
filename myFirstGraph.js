// const deptFirstPrint = (graph, source) => {
//     const stack = [ source ];

//     while (stack.length > 0) {
//        const current = stack.pop();
//        console.log(current);

//        for (let neighbor of graph[current]){
//            stack.push(neighbor)
//        }

//     }
// }

const deptFirstPrint = (graph, source) => {
  if (graph[source].lenght === 0) return;
  console.log(source);
  for (let neighbor of graph[source]) {
    deptFirstPrint(graph, neighbor);
  }
};

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      console.log(neighbor);
      queue.push(neighbor);
    }
  }
};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

deptFirstPrint(graph, "a");

breadthFirstPrint(graph, "a");
