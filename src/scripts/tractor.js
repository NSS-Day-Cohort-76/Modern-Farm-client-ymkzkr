import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (yearlyPlan) => {
  let plants = []
  yearlyPlan.forEach(subArray => {
    subArray.forEach(seed => {
       switch (seed) {
        case "Asparagus":
          plants.push(asparagusSeed);
          break;
        case "Corn":
          plants.push(cornSeed);
          break;
        case "Sunflower":
          plants.push(sunflowerSeed);
          break;
        case "Soybean":
          plants.push(createSoybean());
          break;
        case "Potato":
          plants.push(createPotato());
          break;
        case "Wheat":
          plants.push(createWheat());
          break;
        default:
          console.warn(`Unknown seed type: ${seed}`);
      }
    })
  });
  return plants
}
