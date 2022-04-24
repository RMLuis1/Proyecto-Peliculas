import { useEffect, useState } from "react";
import { get } from "../Utils/httpClient";
import { MoviesCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "../componentes/spinner";
import { useQuery } from "../Hooks/useQuery";

export function MoviesGrid() {
  const [movie, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";

    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <ul className={styles.moviesGrid}>
      {movie.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
