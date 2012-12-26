function isWinner(player, others) {
    var highest = 0;
    for (var i = 0, n = others.length; i < n; i++) {
        var player = others[i]; // same scope as player parameter!
        if (player.score > highest) {
            highest = player.score;
        }
    }
    return player.score > highest;
}
