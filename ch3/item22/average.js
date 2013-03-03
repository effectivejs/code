function average() {
    for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
        sum += arguments[i];
    }
    return sum / n;
}
