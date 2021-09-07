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
        <img src= ${imageUrl}> `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Is Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");

    if (fuelLevel < 10000) {
        list.style.visibility="visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `Copilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel too low for launch";
     
     } else if (cargoLevel > 10000) {
        list.style.visibility="visible";
        h2.style.color = "red";
        h2.innerHTML = "Shuttle not ready for Launch"
        pilotStatus = `Pilot ${pilot} is ready for launch`;
        copilotStatus = `Copilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     
     } else if (cargoLevel > 10000 && fuelLevel < 10000) {
         list.style.visibility = "visible";
         h2.style.color = "red";
         h2.innerHTML = "Shuttle not ready for Launch";
         cargoStatus.innerHTML = "Cargo mass too heavy for launch";
         fuelStatus.innerHTML = "Fuel to low for launch";
     
     } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
         list.style.visibility = "visible";
         h2.style.color = "rgb (65,159, 107)";
         h2.innerHTML = "Shuttle ready for launch";
         pilotStatus = `Pilot ${pilot} is ready for launch`;
         copilotStatus = `Copilot ${copilot} is ready for launch`;
         fuelStatus = "Fuel level high enough for launch";
         cargoStatus = "Cargo Mass low enough for launch";
        }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const thePlanets = await planetsReturned.json();
    console.log(thePlanets);
    return thePlanets;
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    let myPlanet = planets[index];
    return myPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
