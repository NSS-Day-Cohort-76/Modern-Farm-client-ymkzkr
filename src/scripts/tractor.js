import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (yearlyPlan) => {
    for (const array of yearlyPlan) {
        for (const plant of array) {
            if (plant === "Asparagus") {
                addPlant(createAsparagus())
            }
            else if (plant === "Corn") {
                addPlant(createCorn())
            }
            else if (plant === "Potato") {
                addPlant(createPotato())
            }
            else if (plant === "Soybean") {
                addPlant(createSoybean())
            }
            else if (plant === "Sunflower") {
                addPlant(createSunflower())
            }
            else if (plant === "Wheat") {
                addPlant(createWheat())
            }
        }   
    }
}

//     }
// export const plantSeeds = (yearlyPlan) => {
//   let plants = []
//   yearlyPlan.forEach(subArray => {
//     subArray.forEach(seed => {
//        switch (seed) {
//         case "Asparagus":
//           plants.push(createAsparagus());
//           break;
//         case "Corn":
//           plants.push(createCorn());
//           break;
//         case "Sunflower":
//           plants.push(createSunflower());
//           break;
//         case "Soybean":
//           plants.push(createSoybean());
//           break;
//         case "Potato":
//           plants.push(createPotato());
//           break;
//         case "Wheat":
//           plants.push(createWheat());
//           break;
//         default:
//           console.warn(`Unknown seed type: ${seed}`);
//       }
//     })
//   });
//   return plants
// }