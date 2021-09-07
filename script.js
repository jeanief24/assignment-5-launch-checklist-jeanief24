// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    const document = window.document;
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass");
    const list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

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
        }
        event.preventDefault();
    )};

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let pickedPlanet = pickedPlanet(listedPlanets);
   })
     addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)

});