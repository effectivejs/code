function f(n) {
    return n === 0 ? getCallStack() : f(n - 1);
}

var trace = f(1); // infinite loop
