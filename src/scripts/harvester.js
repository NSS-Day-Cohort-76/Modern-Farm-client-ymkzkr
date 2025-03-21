import { barn } from "./storageBarn.js"

export const harvestPlants = (plantsArray) => {

    let harvestedArray = []
    let typeCount = {}
    for (const obj of plantsArray) {
        if (obj.type === "Corn") {
            for (let i = 0; i < (obj.output / 2); i++) {
              harvestedArray.push(obj)
              //Push to Barn Stack
              barn(obj).pushPlant()
              
              //ID Creation
              typeCount[obj.type] = (typeCount[obj.type] || 0) + 1
              harvestedArray.push({...obj, id:typeCount[obj.type]})
              }
        }
        else { 
            for (let i = 0; i < obj.output; i++) {
            harvestedArray.push(obj)
            //Push to Barn Stack
            barn(obj).pushPlant()
            
            //ID Creation
            typeCount[obj.type] = (typeCount[obj.type] || 0) + 1
            harvestedArray.push({...obj, id:typeCount[obj.type]})
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