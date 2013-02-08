(function(x) {
    return function(y) {
        return x + y;
    }
})(42).toString(); // "function (y) {\n    return x + y;\n}"
