import { useParams } from "react-router-dom";
import styles from "./css/Ciudad.module.css";

function Ciudad({ onFilter }) {
  const { id } = useParams();
  const city = onFilter(id);
  return (
    <div className={styles.ciudad}>
        <h2>{city.name}</h2>
        <span>
            <p>Temperatura: {city.temp}</p>
            <p>Clima: {city.weather}</p>
            <p>Viento: {city.wind}</p>
            <p>Cantidad de nubes: {city.clouds}</p>
            <p>Latitud: {city.latitud}º</p>
            <p>Longitud: {city.longitud}º</p>
        </span>
    </div>
  );
}

export default Ciudad;
