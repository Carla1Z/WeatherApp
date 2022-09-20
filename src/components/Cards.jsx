import Card from "./Card";

function Cards({ cities, onClose }) {
  return (
    <div>
      {cities ? (
        cities.map((city) => (
          <Card
            key={city.id}
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
