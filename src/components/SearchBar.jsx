import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          //despues de ejecutar la busqueda, borre el contenido del input
          setCity("");
        }}
      >
        <input
          type="text"
          placeholder="Ciudad..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />

        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}

export default SearchBar;
