import SearchBar from "./SearchBar";
import icono from "../assets/icono.gif";
import styles from "./css/Nav.module.css";

function Nav({ onSearch }) {
  return (
    <div className={styles.nav}>
      <img src={icono} alt="icono" className={styles.icono} />
      <h2 className={styles.name}>Weather App</h2>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
