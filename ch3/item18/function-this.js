function hello() {
    return "hello, " + this.username;
}

var obj1 = {
    hello: hello,
    username: "Gordon Gekko"
};
obj1.hello(); // "hello, Gordon Gekko"

var obj2 = {
    hello: hello,
    username: "Biff Tannen"
};

obj2.hello(); // "hello, Biff Tannen"

hello(); // "hello, undefined"
