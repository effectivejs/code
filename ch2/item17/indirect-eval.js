var x = "global";
function test() {
    var x = "local";
    var f = eval;
    return f("x"); // indirect eval
}
test(); // "global"
