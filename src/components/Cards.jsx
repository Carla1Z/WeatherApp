import Card from "./Card";
import styles from "./css/Cards.module.css"

function Cards({ cities, onClose }) {
  return (
    <div className={styles.cards}>
      {cities ? (
        cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
          />
        ))
      ) : (
        <h2>No se encontraron ciudades</h2>
      )}
    </div>
  );
}

export default Cards;
