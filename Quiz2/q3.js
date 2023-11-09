function User(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
User.getFullname = function () {
    return this.firstname + ' ' + this.lastname;
}
User.prototype.setFirstName = function (firstname) {
    this.firstname = firstname;
}
const john = new User('John', 'Smith');
john.setFirstName('Edward');
john.setLastname = function (lastname) {
    this.lastname = lastname;
}
