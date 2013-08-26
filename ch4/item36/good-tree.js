function Tree (x) {
    this.value = x;
    this.children = [];
}
Tree.prototype = {
    addChild: function(x) {
        this.children.push(x);
    }
}
