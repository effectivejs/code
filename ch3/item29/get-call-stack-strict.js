function f() {
    "use strict";
    return f.caller;
}

f(); // error: caller may not be accessed on strict functions
