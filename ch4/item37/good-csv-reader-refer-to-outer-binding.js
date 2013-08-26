CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    var self = this; // save a reference to outer this-binding
    return line.map(function(line) {
        return line.split(this.regexp); // use outer this
    });
};

var reader = new CSVReader();
reader.read("a,b,c\nd,e,f\n");
// [["a", "b", "c"], ["d", "e"," f"]]
