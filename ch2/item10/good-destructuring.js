function f(x, y) {
    var min = Math.min, round = Math.round, sqrt = Math.sqrt;
    return min(round(x), sqrt(y));
}

Math.x = 0;
Math.y = 0;
f(2, 9); // 2
