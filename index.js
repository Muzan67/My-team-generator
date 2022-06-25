const inquirer = require('inquirer');
const fs =require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs =require('fs');

const promptEmployee = () => {
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
    ]);
};

const promptTeam = employeeData => {
console.log(`
=================
Add a New Team Member
`);

// Add Additional Team Member
if (!employeeData.team) {
    employeeData.team = [];
  }
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
            name: 'office',
            message: 'What is your team engineers Github username? (Required)',
            validate: officeInput => {
              if (officeInput) {
                return true;
              } else {
                console.log('Please enter your team engineers Github username!');
                return false;
              }
            }
           },
          {
           type: 'confirm',
           name: 'confirmAddTeamMember',
           message: 'Would you like to enter another team member?',
           default: false
        },
        {
            
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
                name: 'office',
                message: 'What is your interns school name? (Required)',
                validate: schoolInput => {
                  if (schoolInput) {
                    return true;
                  } else {
                    console.log('Please enter your interns school name!');
                    return false;
                  }
                  }
                },   
            ]),
        },

    ])
    
    .then(teamData => {
      employeeData.projects.push(teamData);
      if (teamtData.confirmAddEmployee) {
        return promptEmployee(employeeData);
      } else {
        return employeeData;
      }
    });
};

// TODO: Create a function to write README file

function init() {
    return inquirer.prompt(questions)
        .then(answers => {
        //   const mark = generateMarkDown(answers)
            fs.writeFile('index.html', mark, function (err) {
              if(err) {
                console.log('Could not generate Index.html')
              } else {
                console.log('Sucess Index.html created')
              }
            })
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = Employee;

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>My Team Generator</title>
//     <link rel="stylesheet" href="./style.css">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//   </head>
//   <header>
//     <div class="jumbotron">
//       <h1 class="display-4">My Team</h1>
//   </header>

//   <body>
//   <main class="container my-5">
//     <div class="row">
      
//     <div class="col-6 col-md-4">
//       <div class="card-employee-card">
//         <div class="manager-body">
//           <div class="card text-white bg-primary mb-3">
//             <h2><i class="fa-solid fa-mug-hot"></i>Manager</h2>
//             <ul class="list-group">
//               <li class="list-group-item">Name:</li>
//               <li class="list-group-item">ID:</li>
//               <li class="list-group-item">Email:</li>
//               <li class="list-group-item">Office Number:</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="col-6 col-md-4">
//       <div class="card-employee-card">
//         <div class="manager-body">
//           <div class="card text-white bg-primary mb-3">
//             <h2><i class="fa-solid fa-chalkboard-user"></i>Engineer</h2>
//             <ul class="list-group">
//               <li class="list-group-item">Name:</li>
//               <li class="list-group-item">ID:</li>
//               <li class="list-group-item">Email:</li>
//               <li class="list-group-item">Github:</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div class="col-6 col-md-4">
//       <div class="card-employee-card">
//         <div class="manager-body">
//           <div class="card text-white bg-primary mb-3">
//             <h2><i class="fa-solid fa-graduation-cap"></i>Intern</h2>
//             <ul class="list-group">
//               <li class="list-group-item">Name:</li>
//               <li class="list-group-item">ID:</li>
//               <li class="list-group-item">Email:</li>
//               <li class="list-group-item">School:</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//   </row>

// </main>
    
// </html>