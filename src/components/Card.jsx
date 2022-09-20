function Card({ name, min, max, onClose, img, id }) {
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <h3>{name}</h3>
      <div>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="clima"
        />
      </div>
    </div>
  );
}

export default Card;
