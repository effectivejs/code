var obj = {
    hello: function() {
        return "hello, " + this.username;
    },
    username: "Hans Gruber"
};
obj.hello(); // "hello, Hans Gruber"

var obj2 = {
    hello: obj.hello,
    username: "Boo Radley"
};
obj2.hello();
