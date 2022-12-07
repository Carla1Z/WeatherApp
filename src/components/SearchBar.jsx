import { useState } from "react";
import styles from "./css/SearchBar.module.css"

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
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Ciudad..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className={styles.text}
          />

          <input type="submit" value="Agregar" className={styles.submit} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
