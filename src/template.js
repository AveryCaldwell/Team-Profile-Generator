//  template helper code
// create team
// create the manager htm
// create the html for engineers
// create the html for interns

//generates the HTML
function generateTeam(data) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="/dist/style.css">
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
    <!-- CARD ONE -->
    <div class="card-group row-cols-md-3">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">Job Position</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- CARD 2 -->
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">Job Position</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- CARD 3 -->
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">Job Position</p>
                    </div>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- CARD 4 -->
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">Job Position</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- CARD 5 -->
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <div class="header">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">Job Position</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">Office Number: </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
    
    
    
    
    
    
    
    `;
}