// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) { 
    let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src= ${imageUrl}> `
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
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (fuelLevel < 10000) {
        list.style.visibility="visible";
        h2.style.color = "rgb(255, 0, 0)";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `Copilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel too low for launch";
     
     } else if (cargoLevel > 10000) {
        list.style.visibility="visible";
        h2.style.color = "rgb(255, 0, 0)";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `Copilot ${copilot} is ready for launch`;
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
         pilotStatus = `Pilot ${pilot} is ready for launch`;
         copilotStatus = `Copilot ${copilot} is ready for launch`;
         fuelStatus = "Fuel level high enough for launch";
         cargoStatus = "Cargo Mass low enough for launch";
        }
   
}

async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    let planet = await planetsReturned.json();
    console.log(planet);
    return planet;
    }

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    let missionPlanet = planets[index];
    return missionPlanet;
    
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
