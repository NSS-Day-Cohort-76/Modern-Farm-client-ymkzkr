import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import {harvestPlants} from "./harvester.js"
import {countPlants} from "./catalog.js";
import {countPlantsHTML} from "./catalog.js";


const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = usePlants()


const harvestedFood = harvestPlants(plants)
const allPlants = countPlants(harvestedFood)
const orderPlants = countPlantsHTML(allPlants)

const render = document.querySelector(".container")
render.innerHTML = orderPlants
