function callMethod(obj, method) {
    var shift = [].shift;
    shift.call(arguments);
    shift.call(arguments);
    return obj[method].apply(obj, arguments);
}

var obj = {
    add: function(x, y) { return x + y }
};
callMethod(obj, "add", 17, 25);
// error: cannot read property "apply" of undefined
