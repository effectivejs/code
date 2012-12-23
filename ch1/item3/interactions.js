3 + true; // 4

"hello"(1); // error: not a function
null.x;     // error: cannot read property 'x' of null

2 + 3;              // 5
"hello" + " world"; // "hello world"

"2" + 3; // "23"
2 + "3"; // "23"

1 + 2 + "3";   // "33"

(1 + 2) + "3"; // "33"

(1 + 2) + "3"; // "33"

1 + "2" + 3;   // "123"

(1 + "2") + 3; // "123"

"17" * 3;  // 51
"8" | "1"; // 9

var x = NaN;
x === NaN; // false

isNaN(NaN);                // true

isNaN("foo");              // true
isNaN(undefined);          // true
isNaN({});                 // true
isNaN({ valueOf: "foo" }); // true

var a = NaN;
a !== a;                   // true
var b = "foo";
b !== b;                   // false
var c = undefined;
c !== c;                   // false
var d = {};
d !== d;                   // false
var e = { valueOf: "foo" };
e !== e;                   // false

function isReallyNaN(x) {
    return x !== x;
}

"the Math object: " + Math; // "the Math object: [object Math]"
"the JSON object: " + JSON; // "the JSON object: [object JSON]"

Math.toString(); // "[object Math]"
JSON.toString(); // "[object JSON]"

"J" + { toString: function() { return "S"; } }; // "JS"
2 * { valueOf: function() { return 3; } };      // 6

var obj = {
    toString: function() {
        return "[object MyObject]";
    },
    valueOf: function() {
        return 17;
    }
};
"object: " + obj; // "object: 17"
