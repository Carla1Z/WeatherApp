import SearchBar from "./SearchBar";
import icono from "../assets/icono.gif";
import styles from "./css/Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <img src={icono} alt="icono" className={styles.icono} />
      </Link>
      <h2 className={styles.name}>Weather App</h2>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
