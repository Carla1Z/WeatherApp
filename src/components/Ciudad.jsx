import { useParams } from "react-router-dom";
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
          <span>
            <p>
              <b>Temperatura:</b> {city.temp}
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
      </div>
    </div>
  );
}

export default Ciudad;
