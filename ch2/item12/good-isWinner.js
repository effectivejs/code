function isWinner(player, others) {
    var highest = 0;
    for (var i = 0, n = others.length; i < n; i++) {
        var otherPlayer = others[i];
        if (otherPlayer.score > highest) {
            highest = otherPlayer.score;
        }
    }
    return player.score > highest;
}
