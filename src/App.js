import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Ciudad from "./components/Ciudad";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

  const [cities, setCities] = useState([]);

  function onSearch(cityName) {
    console.log("cityName=" + cityName);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${REACT_APP_API_KEY}&units=metric`
    )
      .then((e) => e.json())
      .then((city) => {
        if (city.main !== undefined) {
          const info = {
            min: Math.round(city.main.temp_min),
            max: Math.round(city.main.temp_max),
            img: city.weather[0].icon,
            id: city.id,
            wind: city.wind.speed,
            temp: city.main.temp,
            name: city.name,
            weather: city.weather[0].main,
            clouds: city.clouds.all,
            latitud: city.coord.lat,
            longitud: city.coord.lon,
          };
          setCities((oldCities) => [...oldCities, info]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}

export default App;
