async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    document.getElementById("weatherResult").innerHTML =
      `Temperature in ${data.name}: ${data.main.temp}°C`;
  }
  