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
          addPlant(createAsparagus());
          break;
        case "Corn":
          addPlant(createCorn());
          break;
        case "Sunflower":
          addPlant(createSunflower());
          break;
        case "Soybean":
          addPlant(createSoybean());
          break;
        case "Potato":
          addPlant(createPotato());
          break;
        case "Wheat":
          addPlant(createWheat());
          break;
        default:
          console.warn(`Unknown seed type: ${seed}`);
      }
    })
  });
  return plants
}