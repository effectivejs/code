function strict(x) {
    "use strict";
    arguments[0] = "modified";
    return x === arguments[0];
}
function nonstrict(x) {
    arguments[0] = "modified";
    return x === arguments[0];
}
strict("unmodified");     // false
nonstrict("unmodified");  // true
