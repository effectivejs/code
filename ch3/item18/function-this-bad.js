function hello() {
    "use strict";
    return "hello, " + this.username;
}
hello(); // error: cannot read property "username" of undefined
