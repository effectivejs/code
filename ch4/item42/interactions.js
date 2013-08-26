Array.prototype.split = function(i) { // alternative #1
    return [this.slice(0, i), this.slice(i)];
};

Array.prototype.split = function() { // alternative #2
    var i = Math.floor(this.length / 2);
    return [this.slice(0, i), this.slice(i)];
};

function addArrayMethods() {
    Array.prototype.split = function(i) {
        return [this.slice(0, i), this.slice(i)];
    };
};
