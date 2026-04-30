var findMaxPathScore = function (edges, online, k) {
  const n = online.length;

  // build adjacency list
  let adj = Array.from({ length: n }, () => []);
  for (let [u, v, w] of edges) {
    adj[u].push([v, w]);
  }

  // topological sort
  function topoSort() {
    let indegree = new Array(n).fill(0);

    for (let u = 0; u < n; u++) {
      for (let [v] of adj[u]) {
        indegree[v]++;
      }
    }

    let queue = [];
    for (let i = 0; i < n; i++) {
      if (indegree[i] === 0) queue.push(i);
    }

    let topo = [];
    while (queue.length) {
      let u = queue.shift();
      topo.push(u);

      for (let [v] of adj[u]) {
        if (--indegree[v] === 0) {
          queue.push(v);
        }
      }
    }

    return topo;
  }

  const topo = topoSort();

  function can(minEdge) {
    let dist = new Array(n).fill(Infinity);
    dist[0] = 0;

    for (let u of topo) {
      if (dist[u] === Infinity) continue;

      // skip offline nodes (except start)
      if (u !== 0 && u !== n - 1 && !online[u]) continue;

      for (let [v, w] of adj[u]) {
        if (w < minEdge) continue;

        if (v !== n - 1 && !online[v]) continue;

        dist[v] = Math.min(dist[v], dist[u] + w);
      }
    }

    return dist[n - 1] <= k;
  }

  // binary search
  let left = 0,
    right = 1e9;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (can(mid)) {
      ans = mid;
      left = mid + 1; // try bigger
    } else {
      right = mid - 1;
    }
  }

  return ans;
};
