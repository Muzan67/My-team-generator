const Employee = require("./Employee");
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return this.school
    }
}

module.exports = Intern;