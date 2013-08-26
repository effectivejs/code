function CSVReader(separators) {
    this.separators = separators || [","];
    this.regexp =
        new RegExp(this.separators.map(function(sep) {
            return "\\" + sep[0];
        }).join("|"));
}

CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return line.map(function(line) {
        return line.split(this.regexp); // wrong this!
    });
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n"); // [["a,b,c"], ["d,e,f"]]