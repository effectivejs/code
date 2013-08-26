function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
    this.toString = function() {
        return "[User " + this.name + "]";
    }
    this.checkPassword = function(password) {
        return hash(password) === this.passwordHash;
    }
}

var u1 = new User(/*...*/);
var u2 = new User(/*...*/);
var u3 = new User(/*...*/);