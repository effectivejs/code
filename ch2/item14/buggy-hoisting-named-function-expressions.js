var f = function g() { return 17; };

// this should be a reference error in correct environments
// in some versions of IE, it produces 17
g();
