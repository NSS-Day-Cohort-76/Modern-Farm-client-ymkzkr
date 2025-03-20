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

    return harvestedArray.sort(function (a, b) {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      });
     
}