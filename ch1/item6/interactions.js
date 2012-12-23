function Point(x, y) {
    this.x = (typeof x === "undefined") ? 0 : x
    this.y = (typeof y === "undefined") ? 0 : y
}

Point.prototype.isOrigin = function() {
    return this.x === 0 && this.y === 0
}

function square(x) {
    var n = +x
    return n * n
}

function area(r) { r = +r; return Math.PI * r * r }
function add1(x) { return x + 1 }

// function area(r) { r = +r return Math.PI * r * r } // error

// NOTE: I am leaving out the really egregious examples, to avoid anyone copying
//       and pasting them into real programs.
