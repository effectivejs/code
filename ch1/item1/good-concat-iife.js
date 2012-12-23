(function() {
    // file1.js
    "use strict";
    function f() {
        // ...
    }
    // ...
})();
(function() {
    // file2.js
    // no strict mode directive
    function g() {
        var arguments = []; // error: redefinition of arguments
        // ...
    }
    // ...
})();
