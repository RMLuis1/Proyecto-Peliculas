import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../Hooks/useQuery";
import { useEffect } from "react";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const [searchText, serSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    serSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchImp}
          type="text"
          value={searchText}
          onChange={(e) => serSearchText(e.target.value)}
        />
        <button className={styles.searchBot} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
