var empty = Object.create(null); // object with no prototype
"__proto__" in empty; // false (in some environments)

var empty = Object.create(null); // object with no prototype
"__proto__" in empty; // true (in some environments)