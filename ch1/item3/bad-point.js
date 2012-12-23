function point(x, y) {
    if (!x) {
        x = 320;
    }
    if (!y) {
        y = 240;
    }
    return { x: x, y: y };
}

point(0, 0); // { x: 320, y: 240 }
