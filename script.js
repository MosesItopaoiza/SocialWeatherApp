// Current weather
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "b6f90e9123d23568e92056abe3080401";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.main) {
      document.getElementById("weatherResult").innerHTML =
        `<p>🌡️ Temperature in <strong>${data.name}</strong>: ${data.main.temp}°C</p>`;
    } else {
      document.getElementById("weatherResult").innerHTML =
        `<p>❌ Could not retrieve weather data for "${city}".</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "<p>⚠️ Error fetching weather data.</p>";
    console.error(error);
  }
}

// 5-day forecast
async function getFiveDayForecast() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "b6f90e9123d23568e92056abe3080401";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const forecastDiv = document.getElementById("forecastResult");
    forecastDiv.innerHTML = "<h3>📅 5-Day Forecast:</h3>";

    for (let i = 0; i < data.list.length; i += 8) {
      const item = data.list[i];
      const date = new Date(item.dt_txt).toDateString();
      const temp = item.main.temp;
      const desc = item.weather[0].description;

      forecastDiv.innerHTML += `<p><strong>${date}:</strong> ${temp}°C, ${desc}</p>`;
    }
  } catch (error) {
    document.getElementById("forecastResult").innerHTML =
      "<p>⚠️ Error fetching forecast data.</p>";
    console.error(error);
  }
}

// Post status
function postStatus() {
  const status = document.getElementById("statusInput").value;
  const city = document.getElementById("cityInput").value;
  const statusBoard = document.getElementById("statusBoard");

  if (status.trim() !== "") {
    const post = `<p><strong>${city}:</strong> ${status}</p>`;
    statusBoard.innerHTML += post;
    document.getElementById("statusInput").value = "";
  }
}
