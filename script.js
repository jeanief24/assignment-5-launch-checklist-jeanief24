// Write your JavaScript code here!

const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form")
    form.reset();
    document.getElementById("faultyItems").style.visibility="hidden";

    form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass");
        let list = document.querySelector("faultyItems");
           
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        event.preventDefault();

       if (validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" ||
        validateInput(cargoLevel.value) == "Empty") {
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

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function() {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    });
});