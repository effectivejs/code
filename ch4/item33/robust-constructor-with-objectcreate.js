function User(name, passwordHash) {
    var self = this instanceof User
             ? this
             : Object.create(User.prototype);
    self.name = name;
    self.passwordHash = passwordHash;
    return self;
}
