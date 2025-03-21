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
    return structuredClone(plants)
}
