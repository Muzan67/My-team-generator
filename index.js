const inquirer = require('inquirer');
const fs =require('fs');
const generateSite = require('./src/generate-site.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your team managers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your team managers name!');
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your team managers id? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your team managers id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your team managers email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your team managers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your team managers office number? (Required)',
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('Please enter your team managers office number!');
          return false;
        }
      }
    },   
  ]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptTeam();
  })
};

const promptTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Select which employee you would like to add:',
      choices: ['add an engineer', 'add an intern', 'finish assembling team members']
    }])
    .then(userChoice => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          assembleTeam();
        }
    });
  };

const promptEngineer = () => {
  console.log(`
  ===============
  Add an Engineer
  ===============
  `);

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your team engineers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
           return true;
         } else {
           console.log('Please enter your team engineers name!');
           return false; 
         }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your team engineers id? (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your team engineers id!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your team engineers email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your team engineers email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your team engineers Github username? (Required)',
      validate: githubUsername => {
        if (githubUsername) {
          return true;
        } else {
          console.log('Please enter your team engineers Github username!');
          return false;
        }
      }
    }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.hithubUsername);
        teamMembers.push(engineer);
        promptTeam();
      })
    };

const promptIntern = () => {
  console.log(`
  ===============
  Add an Intern
  ===============
  `);
            
  return inquirer.prompt([
   {
     type: 'input',
     name: 'name',
     message: 'What is your team interns name? (Required)',
     validate: nameInput => {
       if (nameInput) {
         return true;
       } else {
         console.log('Please enter your team interns name!');
         return false; 
       }
     }
    },
   {
     type: 'input',
     name: 'id',
     message: 'What is your team interns id? (Required)',
     validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter your team interns id!');
        return false;
      }
    }
   },
   {
     type: 'input',
     name: 'email',
     message: 'What is your team interns email? (Required)',
     validate: schoolInput => {
       if (schoolInput) {
         return true;
     } else {
      console.log('Please enter your team interns email!');
      return false;
     }
    }
   },
   {
     type: 'input',
     name: 'school',
     message: 'What is your interns school name? (Required)',
     validate: schoolInput => {
       if (schoolInput) {
          return true;
      } else {
        console.log('Please enter your interns school name!');
        return false;
      }
    }
  }   
]).then(answers => {
      console.log(answers);
      const manager = new Intern(answers.name, answers.Id, answers.email, answers.school);
      teamMembers.push(intern);
        promptTeam();
    })
  };

// TODO: Create a function to write README file

const assembleTeam = () =>
  console.log(`
================
Assemble My Team
================
`);

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");

promptManager();


