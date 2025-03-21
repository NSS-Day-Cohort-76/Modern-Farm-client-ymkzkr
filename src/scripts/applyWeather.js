

export const applyWeather = (harvestedFood, weather) => {
for (let i = 0; i < harvestedFood.length; i++) {
    harvestedFood[i].output *= weather.effect;
}

};