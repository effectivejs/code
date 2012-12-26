var constructor = function() { return null; };
var f = function f() {
    return constructor();
};

// in ES3 environments, this produces {}
// in ES5 environments, this produces null
f();
