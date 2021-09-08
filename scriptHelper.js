// Write your helper functions here!
require('isomorphic-fetch');

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
    if (testInput.length === 0) {
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

    if (fuelLevel < 10000) {
        list.style.visibility="visible";
        h2.style.color = "rgb(255, 0, 0)";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} Ready`;
        copilotStatus = `Co-pilot ${copilot} Ready`;
        fuelStatus.innerHTML = "Fuel too low for launch";
     
     } else if (cargoLevel > 10000) {
        list.style.visibility="visible";
        h2.style.color = "rgb(255, 0, 0)";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} Ready`;
        copilotStatus = `Co-pilot ${copilot} Ready`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     
     } else if (cargoLevel > 10000 && fuelLevel < 10000) {
         list.style.visibility = "visible";
         h2.style.color = "rgb(255, 0, 0)";
         h2.innerHTML = "Shuttle not ready for Launch";
         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
         fuelStatus.innerHTML = "Fuel to low for launch";
     
     } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
         list.style.visibility = "visible";
         h2.style.color = "rgb (69, 75, 27)";
         h2.innerHTML = "Shuttle ready for launch";
         pilotStatus = `Pilot ${pilot} Ready`;
         copilotStatus = `Co-pilot ${copilot} Ready`;
         fuelStatus = "Fuel level high enough for launch";
         cargoStatus = "Cargo Mass low enough for launch";
        }
   
}

async function myFetch() {
    let planetsReturned;

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

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;