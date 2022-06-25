const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // use employee constructor
        super(name, id, email);
        // add office number to Manager Profile Card
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;