import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import {harvestPlants} from "./harvester.js"
// import { catalog } from "./catalog.js"
import { countPlants } from "./catalog.js";
import { countPlantsHTML } from "./catalog.js";
import { countPlants } from "./catalog.js"


const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = usePlants()


const harvestedFood = harvestPlants(plants)

countPlants(harvestedFood)
const render = document.querySelector(".container")
render.innerHTML = displayHTML


const displayHTML = catalog(harvestedFood)
countPlants(harvestedFood)
const render = document.querySelector(".container")
render.innerHTML = displayHTML
