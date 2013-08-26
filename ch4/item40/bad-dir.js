function Dir(path, entries) {
    this.path = path;
    for(var i = 0, n = entries.length; i < n; i++) {
        this[i] = entries[i];
    }
}

Dir.prototype = Object.create(Array.prototype);
// extends Array

var dir = new Dir("/tmp/mysite", ["index.html", "script.js", "style.css"]);
dir.length; // 0

var dir = new Dir("/", []);
Object.prototype.toString.call(dir); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
