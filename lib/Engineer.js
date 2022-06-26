const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // use employee constructor
        super(name, id, email);
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