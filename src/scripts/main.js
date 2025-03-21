import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import {harvestPlants} from "./harvester.js"
import {countPlants} from "./catalog.js";
import {countPlantsHTML} from "./catalog.js";
import {barn} from "./storageBarn.js";
import { barnStorage } from "./storageBarn.js";
import { getWeather } from "./weather.js";
import { applyWeather } from "./applyWeather.js";

//Get yearly crops to plant
const yearlyPlan = createPlan();

//Tractor plants seeds on field
plantSeeds(yearlyPlan);

//Store the planted seeds
const plants = usePlants();

//Harvest seeds by output amount
const harvestedFood = harvestPlants(plants);

//Count types of plants and return Html strings
const weather = getWeather();
const weatherArray = applyWeather(harvestedFood, weather)
const allPlants = countPlants(weatherArray);
const orderPlants = countPlantsHTML(allPlants);



//Render HTML to dom
const render = document.querySelector(".container")
render.innerHTML = orderPlants
