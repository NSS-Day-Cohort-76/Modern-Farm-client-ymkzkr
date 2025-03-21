// const storePlants = []

// export const addPlant = (seed) => {
//     if (Array.isArray(seed)) {
//         storePlants.push(seed[0])
//         storePlants.push(seed[1])
//     }
//     else {
//         storePlants.push(seed)
//     }

// }

// export const usePlants = () => {
//     return structuredClone(storePlants)
let plants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
    for (let seed of seedObject) {
        plants.push(seed)
    }
    } else {
        plants.push(seedObject)
    }
}



export const usePlants = () => {
    return structuredClone(plants);
}