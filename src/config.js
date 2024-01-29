export const apiKey = "fbe4c2e2d244f8643bc2bac3de799ba9"

export function getForecastData(latitude, longitude, apiKey){
    return `https://api.openweathermap.org/data/2.5/forecast/?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
}

export function getWeatherData(latitude, longitude, apiKey){
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
}