function point(x, y) {
    if (typeof x === "undefined") {
        x = 320;
    }
    if (typeof y === "undefined") {
        y = 240;
    }
    return { x: x, y: y };
}

point();     // { x: 320, y: 240 }
point(0, 0); // { x: 0, y: 0 }
