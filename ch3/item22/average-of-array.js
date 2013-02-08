function averageOfArray(a) {
    for (var i = 0, sum = 0, n = a.length; i < n; i++) {
        sum += a[i];
    }
    return sum / n;
}

averageOfArray([2, 7, 1, 8, 2, 8, 1, 8]); // 4.625
