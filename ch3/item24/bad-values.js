function values() {
    var i = 0, n = arguments.length;
    return {
        hasNext: function() {
            return i < n;
        },
        next: function() {
            if (i >= n) {
                throw new Error("end of iteration");
            }
            return arguments[i++]; //wrong arguments
        }
    };
}

var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
it.next(); // undefined
it.next(); // undefined
it.next(); // undefined
