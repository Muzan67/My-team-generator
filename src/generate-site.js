const generateTeam = (team) =>
    console.log(team);

    const html = [];

// generate Manager // 
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${manager.name} <br/>
        <i class="fa-solid fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id ="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNUmber}</li>
        </ul>
    </div>
    `;
    html.push(managerHtml);
    }
 
// generate Engineer //
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${engineer.name} <br/>
        <i class="fa-solid fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id ="email"><a href="mailto:${engineer.email}">${engineer.githubemail}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com${engineer.githubUsername}">${engineer.githubUsername}</a></li>
        </ul>
    </div>
    `;
    html.push(engineerHtml);
    }

// generate Intern //
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${intern.name} <br/>
        <i class="fa-solid fa-mug-hot"></i>Manager</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id ="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    `;
    html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
  
    }

// combine team members // 
    return html.join('');

// exports to assemble team // 
module.exports = team => {

return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team Generator</title>
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <header>
    <div class="jumbotron">
      <h1 class="display-4">My Team</h1>
  </header>

  <main> ${generateTeam(team)} </main>

  </body>
  </html>
        `;
}