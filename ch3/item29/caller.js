function revealCaller() {
    return revealCaller.caller;
}

function start() {
    return revealCaller();
}

start() == start;  // true
