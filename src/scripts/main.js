import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
const yearlyPlan = createPlan()

console.log("Welcome to the main module")

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn} from "./seeds/corn.js"
import {createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower} from "./seeds/sunflower.js"
import {createWheat } from "./seeds/wheat.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
const cornSeed = createCorn()
console.log(cornSeed)
const potatoSeed = createPotato()
console.log(potatoSeed)
const soybeanSeed = createSoybean()
console.log(soybeanSeed)
const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)
const wheatSeed = createWheat()
console.log(wheatSeed)


const useAsparagus = usePlants(asparagusSeed)
console.log(useAsparagus)
const useCorn = usePlants(cornSeed)
console.log(useCorn)
const usePotato = usePlants(potatoSeed)
console.log(usePotato)
const useSoybean = usePlants(soybeanSeed)
console.log(useSoybean)
const useSunflower = usePlants(sunflowerSeed)
console.log(useSunflower)
const useWheat = usePlants(wheatSeed)
console.log(useWheat)


