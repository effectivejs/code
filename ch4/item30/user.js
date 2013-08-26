function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

User.prototype.toString = function() {
    return "[User " + this.name + "]";
}

User.prototype.checkPassword = function(password) {
    return hash(password) === this.passwordHash;
}

var u = new User("sfalken",
                 "0ef33ae791068ec64b502d6cb0191387");

Object.getPrototypeOf(u) === User.prototype; // true

u.__proto__ === User.prototype; // true
