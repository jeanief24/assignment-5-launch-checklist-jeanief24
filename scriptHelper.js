// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) { 
    missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src= ${imageUrl}>`
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

    if (fuelLevelData < 10000) {
        list.style.visibility="visible";
        h2.style.color = "rgb(255, 0, 0)";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} Ready`;
        copilotStatus = `Co-pilot ${copilot} Ready`;
        fuelStatus.innerHTML = "Fuel too low for launch";
     
     } else if (cargoLevelData > 10000) {
        list.style.visibility="visible";
        h2.style.color = "rgb(255, 0, 0)";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} Ready`;
        copilotStatus = `Co-pilot ${copilot} Ready`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     
     } else if (cargoLevelData > 10000 && fuelLevelData < 10000) {
         list.style.visibility = "visible";
         h2.style.color = "rgb(255, 0, 0)";
         h2.innerHTML = "Shuttle not ready for Launch";
         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
         fuelStatus.innerHTML = "Fuel to low for launch";
     
     } else if (cargoLevelData <= 10000 && fuelLevelData >= 10000) {
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
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });
    return planetsReturned;
    }

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
