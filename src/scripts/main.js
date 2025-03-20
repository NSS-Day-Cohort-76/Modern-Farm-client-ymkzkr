import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
const yearlyPlan = createPlan()

console.log("Welcome to the main module")

const plantedSeeds = plantSeeds(yearlyPlan)
console.log(plantedSeeds)

