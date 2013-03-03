var hasOwnProperty = {}.hasOwnProperty;
dict.foo = 1;
delete dict.hasOwnProperty;
hasOwnProperty.call(dict, "foo"); // true
hasOwnProperty.call(dict, "hasOwnProperty"); // false

