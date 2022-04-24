import styles from "./App.module.css";
import { PeliculasDetalles } from "./Paginas/peliculasdetalles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PaginaDestino } from "./Paginas/paginadestino";
import { FaLinkedin } from "react-icons/fa";
export function App() {
  return (
    <Router>
      <header>
        <a
          className={styles.a}
          href="https://www.linkedin.com/in/ricardo-mart%C3%ADn-luis07/"
        >
          <FaLinkedin /> Autor: Luis Ricardo Martin
        </a>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movie/:movieId">
            <PeliculasDetalles />
          </Route>
          <Route path="/">
            <PaginaDestino />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
