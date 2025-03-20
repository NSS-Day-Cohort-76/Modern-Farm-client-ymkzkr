export const harvestPlants = (plantsArray) => {

    let harvestedArray = []

    for (const obj of plantsArray) {

        if (obj.type === "Corn") {
            for (let i = 0; i < (obj.output / 2); i++) {
                harvestedArray.push(obj)
              }
        }
        else { 
            for (let i = 0; i < obj.output; i++) {
            harvestedArray.push(obj)
          }
        }
    }

    return harvestedArray
}