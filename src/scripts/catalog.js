import { plantSeeds } from "./tractor.js"

// export const catalog = (harvestedArray) => {
//     let HTMLString = ''
   
//     for (const obj of harvestedArray) {
//         HTMLString += `
//         <section class="plant">${obj.type}</section>`
        
//     }
//     return HTMLString
// }


// Table version of catalog



export const countPlants = (harvestedArray) => {
    const plantArray = harvestedArray.map((obj) => obj.type)

    const plantCount = plantArray.reduce((allPlants, plant) => {
        const currCount = allPlants[plant] ?? 0;
        allPlants[plant] = currCount + 1;
        // return allNames, otherwise the next iteration receives undefined
        return allPlants;
      }, {}) 
      debugger
    }


    // plantArray.reduce((allPlants, plant) => {
    //     const currCount = allPlants[plant] ?? 0;
    //     allPlants[plant] = currCount + 1;
    //     // return allNames, otherwise the next iteration receives undefined
    //     return allPlants;
    //   }, Object.create(null)


    // const plantCountObj = harvestedArray.reduce((p, c ) => {
    //     let count = 0
    //     const plantObj = { type: c.type,
    //         amount: count++}
    //     return plantObj
    // }, [])

    //{Sunflower: 22}
    //{Asparagus: 13}
    //{Corn: 25}





// export const catalog = (harvestedArray) => {
//     let HTMLString = ''
   
//     for (const obj of harvestedArray) {
//         HTMLString += `
//         <tr>
//             <td>${obj.type}<td>
//             <td>${obj.quantity}<td>`
        
//     }
//     return HTMLString
// }

// export const countPlants = (harvestedArray) => {
//   const plantArray = harvestedArray.map((obj) => obj.type)

//   const plantCount = plantArray.reduce((allPlants, plant) => {
//     let currCount = allPlants[plant] ?? 0 
//     allPlants[plant] = currCount + 1
//     return allPlants
//   }, {})
//   return plantCount
// }

export const countPlantsHTML = (allPlants) => {
  let HTMLString = ''

  for (const [plant, output] of Object.entries(allPlants)) {
    HTMLString += `
    <section class="plant">${plant}: ${output}</section>`
  }
  return HTMLString
}
