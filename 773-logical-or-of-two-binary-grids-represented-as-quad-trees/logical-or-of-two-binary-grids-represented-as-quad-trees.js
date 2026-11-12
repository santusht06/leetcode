var intersect = function(quadTree1, quadTree2) {
    if (quadTree1.isLeaf && quadTree2.isLeaf) {
        return new _Node(quadTree1.val || quadTree2.val, true, null, null, null, null);
    }
    if (quadTree1.isLeaf) {
        if (quadTree1.val) {
            return new _Node(true, true, null, null, null, null);
        } else {
            return quadTree2;
        }
    }
    if (quadTree2.isLeaf) {
        if (quadTree2.val) {
            return new _Node(true, true, null, null, null, null);
        } else {
            return quadTree1;
        }
    }
    let tl = intersect(quadTree1.topLeft, quadTree2.topLeft);
    let tr = intersect(quadTree1.topRight, quadTree2.topRight);
    let bl = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
    let br = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
    if (tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf && 
        tl.val === tr.val && tr.val === bl.val && bl.val === br.val) {
        return new _Node(tl.val, true, null, null, null, null);
    }
    return new _Node(false, false, tl, tr, bl, br);
};