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
      {/* <div className={styles.cityContainer}>
        <div className={styles.cityContainer2}>
          <h2 className={styles.titleCity}>{city.name}</h2>
          <div className={styles.info}>
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Ciudad;
