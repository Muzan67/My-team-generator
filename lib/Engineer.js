const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, github) {
        // use employee constructor
        super(name, id, github);
        // add Github to Engineer Profile Card
        this.githubUsername = githubUsername;
    }
    getGithub() {
        return this.githubUsername;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;