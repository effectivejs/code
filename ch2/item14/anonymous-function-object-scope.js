var constructor = function() { return null; };
var f = function() {
    return constructor();
};

// in correct ES3 and ES5 environments, this produces null
// in some buggy JavaScript environments, this produces {}
f();
