function f() { return "global"; }

function test(x) {
    var result = [];
    if (x) {
        function f() { return "local"; } // unspecified behavior

        result.push(f());
    }
    result.push(f());
    return result;
}

test(true);  // ?
test(false); // ?
