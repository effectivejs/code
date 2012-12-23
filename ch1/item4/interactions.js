var s = new String("hello");

s + " world"; // "hello world"

s[4]; // "o"

typeof "hello"; // "string"
typeof s;       // "object"

var s1 = new String("hello");
var s2 = new String("hello");
s1 === s2; // false

s1 == s2; // false

"hello".toUpperCase(); // "HELLO"

"hello".someProperty = 17;
"hello".someProperty; // undefined
