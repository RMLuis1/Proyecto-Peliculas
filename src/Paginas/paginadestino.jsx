import { MoviesGrid } from "../componentes/MoviesGrid";
import { Search } from "../componentes/Search";

export function PaginaDestino() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}
