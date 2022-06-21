class Engineer extends Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub() {
        return this.github
    }
}

module.exports = Employee;