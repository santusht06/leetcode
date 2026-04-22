var copyRandomList = function (head) {
  if (!head) return null;

  let map = new Map();

  // Step 1: create all nodes
  let curr = head;
  while (curr) {
    map.set(curr, new _Node(curr.val, null, null));
    curr = curr.next;
  }

  // Step 2: assign next & random
  curr = head;
  while (curr) {
    let copy = map.get(curr);
    copy.next = curr.next ? map.get(curr.next) : null;
    copy.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
  }

  return map.get(head);
};
