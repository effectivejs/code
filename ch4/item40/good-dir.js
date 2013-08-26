function Dir(path, entries) {
    this.path = path;
    this.entries = entries;
}

Dir.prototype.forEach = function(f, thisArg) {
    if (typeof thisArg === "undefined") {
        thisArg = this;
    }
    this.entries.forEach(f, thisArg);
}