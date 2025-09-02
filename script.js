// script.js
import { auth, db } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

// Current weather
export async function getWeather() {
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
    console.error("Weather API error:", error);
  }
}

// 5-day forecast
export async function getFiveDayForecast() {
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
    console.error("Forecast API error:", error);
  }
}

// Post status to Firestore
export function postStatus() {
  const status = document.getElementById("statusInput").value.trim();
  const city = document.getElementById("cityInput").value;
  const user = auth.currentUser;

  if (!status) {
    alert("Please enter a status before posting.");
    return;
  }

  if (user) {
    addDoc(collection(db, "posts"), {
      uid: user.uid,
      email: user.email,
      city: city,
      status: status,
      timestamp: serverTimestamp()
    }).then(() => {
      alert("✅ Status posted!");
      document.getElementById("statusInput").value = "";
    }).catch(error => {
      console.error("Firestore error:", error);
      alert("❌ Failed to post status.");
    });
  } else {
    alert("🔐 Please log in to post.");
  }
}

// Firebase Auth: Sign Up
export function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("✅ Signup successful"))
    .catch(error => {
      console.error("Signup error:", error);
      alert(`❌ ${error.message}`);
    });
}

// Firebase Auth: Login
export function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("✅ Login successful"))
    .catch(error => {
      console.error("Login error:", error);
      alert(`❌ ${error.message}`);
    });
}

// Firebase Auth: Logout
export function logout() {
  signOut(auth)
    .then(() => alert("👋 Logged out"))
    .catch(error => {
      console.error("Logout error:", error);
      alert(`❌ ${error.message}`);
    });
}
