var y = "global";
function test(src) {
    (function() { eval(src); })();
    return y;
}

test("var y = 'local';"); // "global"
test("var z = 'local';"); // "global"
