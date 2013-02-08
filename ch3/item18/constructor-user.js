function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

var u = new User("sfalken",
                 "0ef33ae791068ec64b502d6cb0191387");
u.name; // "sfalken"
