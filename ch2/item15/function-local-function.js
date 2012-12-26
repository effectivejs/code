function f() { return "global"; }

function test(x) {
    function f() { return "local"; }

    var result = [];
    if (x) {
        result.push(f());
    }
    result.push(f());
    return result;
}

test(true);  // ["local", "local"]
test(false); // ["local"]
