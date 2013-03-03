function callMethod(obj, method) {
    var args = [].slice.call(arguments, 2);
    return obj[method].apply(obj, args);
}

var obj = {
    add: function(x, y) { return x + y }
};
callMethod(obj, "add", 17, 25); // 42
