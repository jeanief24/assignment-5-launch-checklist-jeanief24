// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) { 
    let div = document.getElementById('missionTarget')
    div.innerHTML = `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src= ${imageUrl}>
        `;
}

function validateInput(testInput) {
    if (testInput ==="") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Is Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotData = document.getElementById("pilotStatus");
    let copilotData = document.getElementById("copilotStatus");
    let fuelLevelData = document.getElementById("fuelStatus");
    let cargoLevelData = document.getElementById("cargoStatus");

    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" ||
        validateInput(cargoLevel) == "Empty") {
            list.style.visibility = "hidden";
            alert("All fields required");
            event.preventDefault();
        }

        if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
            list.style.visibility = "hidden";
            alert("Pilot and CoPilot names should be letters only");
            event.preventDefault();
        }

        if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            list.style.visibility = "hidden";
            alert("Fuel level and Cargo Mass must be numbers only.");
            event.preventDefault();
        };

    if (fuelLevel < 10000) {
        list.style.visibility="visible";
        document.getElementById("launchStatus").style.color = "rgb(255, 0, 0)";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for Launch"
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
        document.getElementById("fuelStatus").innerHTML = "Fuel too low for launch";
     
     } else if (cargoLevel > 10000) {
        list.style.visibility="visible";
        document.getElementById("launchStatus").style.color = "rgb(255, 0, 0)";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for Launch"
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus") = `Co-pilot ${copilot} Ready`;
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
     
     } else if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(255, 0, 0)";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for Launch"
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("fuelStatus").innerHTML = "Fuel to low for launch";
     
     } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "rgb(255, 0, 0)";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for Launch"
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo Mass low enough for launch";
     }
   
}

async function myFetch() {
    let planetsReturned = [];

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });

    return planetsReturned;
    }

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    let planet = planets[index];
    return planet;
}

//module.exports.addDestinationInfo = addDestinationInfo;
//module.exports.validateInput = validateInput;
//module.exports.formSubmission = formSubmission;
//module.exports.pickPlanet = pickPlanet; 
//module.exports.myFetch = myFetch;