function User(name, passwordHash) {
    "use strict";
    this.name = name;
    this.passwordHash = passwordHash;
}

var u = User("baravelli", "d8b74df393528d51cd19980ae0aa028e");
// error: this is undefined

