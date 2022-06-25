const Employee = require("./Employee");

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        thhis.officeNumber = officeNumber;

    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;