var y = "global";
function test(src) {
    eval(src); // may dynamically bind
    return y;
}
test("var y = 'local';"); // "local"
test("var z = 'local';"); // "global"
