var x = "global";
function test() {
    var x = "local";
    return eval("x"); // direct eval
}
test(); // "local"
