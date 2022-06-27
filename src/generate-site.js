const generateTeam = (team) => {
    // console.log(team);

    const html = [];
    console.log(team.length);
    for (let i =0; i < team.length; i++) {
            if (team[i].getRole() === "Manager") {
            // console.log('here' + team[i])
            generateManager(team[i]);
            html.push(generateManager(team[i]));
            console.log(html);
        }
        if (team[i].getRole() === "Engineer") {
            // console.log('here' + team[i])
            generateEngineer(team[i]);
            html.push(generateEngineer(team[i]));
            console.log(html);
        }
        if (team[i].getRole() === "Intern") {
            // console.log('here' + team[i])
            generateIntern(team[i]);
            html.push(generateIntern(team[i]));
            console.log(html);
        }
    }

    // combine team members // 
    return html.join("");
};

    // generate Manager // 
    const generateManager = (manager) => {
        // console.log(manager);
        return `
        <div class="col-6 col-md-4">
        <div class="card-employee-card">
          <div class="manager-body">
            <div class="card text-white bg-primary mb-3">
        ${manager.name} <br/>
        <h2><i class="fa-solid fa-mug-hot"></i>Manager</h2>
        <ul class="list-group">
            <li class="list-group-item">id: ${manager.id}</li>
            <li class="list-group-item">email: <span id ="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">officeNumber: ${manager.officeNumber}</li>
        </ul>
            </div>
          </div>
        </div>
        </div>
    `;
    // html.push(managerHtml);
    };
 
    // generate Engineer //
    const generateEngineer = (engineer) => {
        // console.log(engineer);
        return `
        <div class="col-6 col-md-4">
        <div class="card-employee-card">
          <div class="engineer-body">
            <div class="card text-white bg-primary mb-3">
        ${engineer.name} <br/>
        <h2><i class="fa-solid fa-chalkboard-user"></i>Engineer</h2>
        <ul class="list-group">
            <li class="list-group-item">id: ${engineer.id}</li>
            <li class="list-group-item">email: <span id ="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">githubUsername: <a target="_blank" href="https://github.com${engineer.githubUsername}">${engineer.githubUsername}</a></li>
        </ul>
            </div>
           </div>
        </div>
        </div>
    `;
    // html.push(engineerHtml);
    };

// generate Intern //
    const generateIntern = (intern) => {
        // console.log(intern);
        return `
        <div class="col-6 col-md-4">
        <div class="card-employee-card">
          <div class="intern-body">
            <div class="card text-white bg-primary mb-3">
        ${intern.name} <br/>
        <h2><i class="fa-solid fa-graduation-cap"></i>Intern</h2>
        <ul class="list-group">
            <li class="list-group-item">id: ${intern.id}</li>
            <li class="list-group-item">email: <span id ="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">school: ${intern.school}</li>
        </ul>
            </div>
          </div>
        </div>
        </div>
    `;
    // html.push(internHtml);
    };

// exports to assemble team // 
module.exports = team => {
    console.log("above here");  
    console.log(team);
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
  
    <body>
      <main> 
      <main class="container my-5">
      <div class="row">
      ${generateTeam(team)}
       </main>

  </body>
  </row>
</html>
        `;
};