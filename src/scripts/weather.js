const weatherConditions = [
    { type: "Sunny", effect: 1.0 },
    { type: "Rainy", effect: 1.2 },
    { type: "Cloudy", effect: 0.9 },
    { type: "Stormy", effect: 0.5 }
];

export const getWeather = () => {
    const randomIndex = Math.floor(Math.random() * weatherConditions.length);
    let selectedWeather

    for (let i = 0; i < weatherConditions.length; i++) {
        if (i === randomIndex) {
            selectedWeather = weatherConditions[i]
            
        }
    }

    return selectedWeather
}