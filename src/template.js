// create team
// create the manager htm
// create the html for engineers
// create the html for interns

//generates the HTML

/*
Data Object Schema:
data: [
        {
            name:string,
            id:int,
            email:string,
            github: string,
            officeNumber:string,
            school: string,
        }
    ]

*/

function generateTeamCard(teamMember) {
    let lineItem;
    switch (teamMember.getRole()) {
        case 'Manager':
            lineItem = `<li class="list-group-item">Office Number: ${teamMember.getOfficeNumber()}</li>`;
            break;
        case 'Engineer':
            lineItem = `<li class="list-group-item">GitHub: ${teamMember.getGithub()}</li>`;
            break;
        case 'Intern':
            lineItem = `<li class="list-group-item">School: ${teamMember.getSchool()}</li>`;
            break;
        default:
            lineItem = '';
            break;
    }
    return `
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <h5 class="card-title">${teamMember.getName()}</h5>
                        <p class="card-text">${teamMember.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teamMember.getId()}</li>
                        <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
                        ${lineItem}
                    </ul>
                </div>
            </div>
        </div>`;
}
function generateTeam(data) {
    let teamArray = [];
    for (let i = 0; i < data.length; i++) {
        teamArray.push(generateTeamCard(data[i]));
    }
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap" rel="stylesheet">
</head>

<body>
    <!-- Header -->
    <header class="title">
        <h1>My Team</h1>
    </header>

    <!-- Card Section -->
    <div class="card-group row-cols-md-3">
        ${teamArray.toString()}
    </div>
</body>

</html>
`;
}
module.exports = generateTeam;
