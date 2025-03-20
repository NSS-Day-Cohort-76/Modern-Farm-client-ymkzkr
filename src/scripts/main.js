import {createPlan} from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import {harvestPlants} from "./harvester.js"
import { catalog } from "./catalog.js"


const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plants = usePlants()

const harvestedFood = harvestPlants(plants)

const displayHTML = catalog(harvestedFood)
const render = document.querySelector(".container")
render.innerHTML = displayHTML



// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn} from "./seeds/corn.js"
// import {createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower} from "./seeds/sunflower.js"
// import {createWheat } from "./seeds/wheat.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const cornSeed = createCorn()
// console.log(cornSeed)
// const potatoSeed = createPotato()
// console.log(potatoSeed)
// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)
// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)
// const wheatSeed = createWheat()
// console.log(wheatSeed)
