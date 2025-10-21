/*
const getCharacters = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data);
};

getCharacters();
*/

const API_KEY = "48c221be41794bcba1a105101252110";

const getWeather = async (location) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
  );
  const data = await res.json();

  renderWeather(data);
};

const renderWeather = (data) => {
  document.querySelector("#results").innerHTML = `
    <h1>${data.location.name}, ${data.location.country}</h1>
    <h2>${data.current.temp_c}º C</h2>
    <p>${data.current.condition.text}</p>
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}"/>
    <p>Feels like: ${data.current.feelslike_c}º</p>
    <p>Humidity: ${data.current.humidity}%</p>
    `;
};

document.addEventListener("DOMContentLoaded", () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    getWeather(`${pos.coords.latitude},${pos.coords.longitude}`);
  });
});
