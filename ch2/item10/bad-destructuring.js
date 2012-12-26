function f(x, y) {
    with (Math) {
        return min(round(x), sqrt(y));
    }
}

Math.x = 0;
Math.y = 0;
f(2, 9); // 0
