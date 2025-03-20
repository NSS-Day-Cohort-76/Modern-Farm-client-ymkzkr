const storePlants = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        storePlants.push(seed[0])
        storePlants.push(seed[1])
    }
    else {
        storePlants.push(seed)
    }

}

export const usePlants = () => {
    return structuredClone(storePlants)
}