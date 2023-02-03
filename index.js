const fs = require("fs");
const inquirer = require("inquirer");

let cardList = [];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of the Manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email?",
  },
  {
    type: "input",
    name: "other",
    message: "What is the Manager's office number?",
  },
  {
    type: "list",
    name: "continue",
    message: "Add another member?",
    choices: ["Intern", "Engineer", "None"],
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of your Intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Intern's email?",
  },
  {
    type: "input",
    name: "other",
    message: "What school does your Intern attend?",
  },
  {
    type: "list",
    name: "continue",
    message: "Add another member?",
    choices: ["Intern", "Engineer", "None"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your Engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the id of your Engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Engineer's email?",
  },
  {
    type: "input",
    name: "other",
    message: "What is your Engineer's github user name?",
  },
  {
    type: "list",
    name: "continue",
    message: "Add another member?",
    choices: ["Intern", "Engineer", "None"],
  },
];

function generateCard(data, other, role) {
  if (role == "Engineer") {
    cardList.push(`<div class="card m-3 bg-light" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
        <h5 class="card-title">${
          data.name[0].toUpperCase() + data.name.substring(1)
        }</h5>
        <p class="card-text pt-2">${role}</p>
    </div>  
    <div class="card-body">
      <ul class="list-group mt-3">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">EMAIL: <a href="mailto:${data.email}">${
      data.email
    }</a></li>
        <li class="list-group-item">${other.toUpperCase()}: <a href="https://github.com/${
      data.other
    }">${data.other}</a></li>
      </ul>
    </div>
    </div>`);
    return;
  }
  cardList.push(`<div class="card m-3 bg-light" style="width: 18rem;">
    <div class="card-body bg-primary text-light">
        <h5 class="card-title">${
          data.name[0].toUpperCase() + data.name.substring(1)
        }</h5>
        <p class="card-text pt-2">${role}</p>
    </div> 
    <div class="card-body">
      <ul class="list-group mt-3">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">EMAIL: <a href="mailto:${data.email}">${
    data.email
  }</a></li>
        <li class="list-group-item">${other.toUpperCase()}: ${data.other}</li>
      </ul>
    </div>
    </div>`);
}
function generateHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body class="bg-light">  
<main class ='row d-flex justify-content-center bg-light'>
    <nav class="navbar navbar-light d-flex justify-content-center col-12 bg-primary">
        <span class="navbar-brand mb-0 h1 text-center ">My Team Profiles</span>
    </nav>
<div id="cardHolder" class = "row w-75 m-5 d-flex justify-content-center">
${cardList.join("")}
</div>
</main>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`;
}

function Init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    generateCard(answers, "office number", "Manager");
    switch (answers.continue) {
      case "Intern":
        GenerateIntern();
        break;
      case "Engineer":
        GenerateEngineer();
        break;
      default:
        Finish();
    }
  });
}
function GenerateIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    generateCard(answers, "school", "Intern");
    switch (answers.continue) {
      case "Intern":
        GenerateIntern();
        break;
      case "Engineer":
        GenerateEngineer();
        break;
      default:
        Finish();
    }
  });
}
function GenerateEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    generateCard(answers, "github", "Engineer");
    switch (answers.continue) {
      case "Intern":
        GenerateIntern();
        break;
      case "Engineer":
        GenerateEngineer();
        break;
      default:
        Finish();
    }
  });
}
function Finish() {
  fs.writeFile("./dist/index.html", generateHTML(), (err) => {
    if (err != null) console.log(err);
    else console.log("Generating Profiles!");
  });
}

Init();
