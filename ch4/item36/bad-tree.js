function Tree(x) {
    this.value = x;
}

Tree.prototype = {
    children: [],
    addchild: function(x) {
        this.children.push(x);
    }
}

var left = new Tree(2);
left.addChild(1);
left.addChild(3);

var right = new Tree(6);
right.addChild(5);
right.addChild(7);

var top = new Tree(4);
top.addChild(left);
top.addChild(right);

top.children; // [1, 3, 5, 7, left, right]
