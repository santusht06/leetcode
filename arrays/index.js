var findItinerary = function (tickets) {
  const graph = new Map();

  // Step 1: Build graph
  for (let [from, to] of tickets) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push(to);
  }

  // Step 2: Sort destinations in reverse lex order
  for (let [key, list] of graph) {
    list.sort().reverse();
  }

  const result = [];

  // Step 3: DFS (Hierholzer)
  function dfs(node) {
    const dests = graph.get(node) || [];

    while (dests.length > 0) {
      const next = dests.pop(); // smallest lex
      dfs(next);
    }

    result.push(node);
  }

  dfs("JFK");

  // Step 4: Reverse result
  return result.reverse();
};
