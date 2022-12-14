import { Link, useParams } from "react-router-dom";
import styles from "./css/Ciudad.module.css";

function Ciudad({ onFilter }) {
  const { id } = useParams();
  const city = onFilter(id);
  return (
    <div className={styles.ciudad}>
      <div className={styles.card}>
        <h2>{city.name}</h2>
        <figure className={styles.detail}>
          <img
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
            alt="clima"
          />
          <span className={styles.info}>
            <p>
              <b>Temperatura:</b> {city.temp}°C
            </p>
            <p>
              <b>Clima:</b> {city.weather}
            </p>
            <p>
              <b>Viento:</b> {city.wind}
            </p>
            <p>
              <b>Cantidad de nubes: </b> {city.clouds}
            </p>
            <p>
              <b>Latitud:</b> {city.latitud}º
            </p>
            <p>
              <b>Longitud:</b> {city.longitud}º
            </p>
          </span>
        </figure>
        <Link to="/">
          <button className={styles.btn}>Volver</button>
        </Link>
      </div>
    </div>
  );
}

export default Ciudad;
