// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form")
    //form.reset();
    document.getElementById("faultyItems").style.visibility="hidden";

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass");
        let list = document.getElementById("faultyItems");
           
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });
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