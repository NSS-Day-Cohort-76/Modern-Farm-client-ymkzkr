import { plantSeeds } from "./tractor.js"

// export const catalog = (harvestedArray) => {
//     let HTMLString = ''
   
//     for (const obj of harvestedArray) {
//         HTMLString += `
//         <section class="plant">${obj.type}</section>`
        
//     }
//     return HTMLString
// }

export const countPlants = (harvestedArray) => {
  const plantArray = harvestedArray.map((obj) => obj.type)

  const plantCount = plantArray.reduce((allPlants, plant) => {
    let currCount = allPlants[plant] ?? 0 
    allPlants[plant] = currCount + 1
    return allPlants
  }, {})
  return plantCount
}

export const countPlantsHTML = (allPlants) => {
  let HTMLString = ''

  for (const [plant, output] of Object.entries(allPlants)) {
    HTMLString += `
    <section class="plant">${plant}: ${output}</section>`
  }
  return HTMLString
}