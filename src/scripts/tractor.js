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