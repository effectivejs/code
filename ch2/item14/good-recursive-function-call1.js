// an example tree
var myTree = {
    key: "Math",
    value: Math,
    left: {
        key: "JSON",
        value: JSON,
        left: null,
        right: null
    },
    right: {
        key: "Date",
        value: Date,
        left: {
            key: "foo",
            value: function() { return "I am the foo function" },
            left: null,
            right: null
        },
        right: null
    }
};

var f = function(tree, key) {
    if (!tree) {
        return null;
    }
    if (tree.key === key) {
        return tree.value;
    }
    return f(tree.left, key) ||
           f(tree.right, key);
};

f(myTree, "foo"); // function() { return "I am the foo function" }
