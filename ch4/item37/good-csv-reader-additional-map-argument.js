CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return line.map(function(line) {
        return line.split(this.regexp);
    }, this); // forward outer this-binding to callback
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");
// [["a", "b", "c"], ["d", "e"," f"]]
