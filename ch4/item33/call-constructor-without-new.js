function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

var u = User("baravelli", "d8b74df393528d51cd19980ae0aa028e");
u; // undefined
this.name; // "baravelli"
this.passwordHash; // "d8b74df393528d51cd19980ae0aa028e"


