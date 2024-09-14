const getWeather = () => {
    const city = document.getElementById('ctyInput').value;
    const apiKey = '823ac2b159c6dece9119a3529e096499';
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Add units=metric to get temperature in Celsius

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            // Accessing the weather data
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Displaying the weather information
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>Description: ${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
};
