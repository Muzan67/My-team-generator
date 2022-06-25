const Employee = require("./Employee");
    class Intern extends Employee {
        constructor(name, id, email, school) {
            // use employee constructor
            super(name, id, email);
            // add school to Intern Profile Card
            this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;