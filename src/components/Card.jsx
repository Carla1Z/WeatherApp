import styles from "./css/Card.module.css";

function Card({ name, min, max, onClose, img, id }) {
  return (
    <div className={styles.card}>
      <span className={styles.closeButton}>
        <button onClick={() => onClose(id)} className={styles.close}>
          X
        </button>
      </span>
      <div className={styles.city}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <span>
            <h4>Min</h4>
            <p>{min}°C</p>
          </span>
          <span>
            <h4>Max</h4>
            <p>{max}°C</p>
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="clima"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
