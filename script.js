
document.getElementById('weather-type');
document.getElementById('temp');
document.getElementById('max-temp');
document.getElementById('min-temp');

const getWeatherData = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a28a51d2a1msh5b732032cd0f080p1a8b71jsncaac4fada982',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}

getWeatherData()

const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)
}

const showWeatherData = (weatherData) => {
    console.log(weatherData)
    document.getElementById('city-name').innerText = weatherData.location.city
    document.getElementById('weather-type').innerText = weatherData.current_observation.condition.text
    document.getElementById('temp').innerText = weatherData.current_observation.condition.temperature
    document.getElementById('max-temp').innerText = weatherData.forecasts[0].high
    document.getElementById('min-temp').innerText = weatherData.forecasts[0].low
}

