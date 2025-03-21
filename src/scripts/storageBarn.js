let barnStack = []

export const barn = (plant) => {
    
    return {
        pushPlant: () => { barnStack.push(plant) },
        popPlant: () => {return barnStack.pop()},
        peek: (peek) => { 
            const index = barnStack.length - 1
            return barnStack[index]
        },
        isEmpty: () => {
            if (barnStack.length === 0) {
                return true
            } else {
                return false
            }
        }
    }

}

export const barnStorage = () => {
    return structuredClone(barnStack)
}