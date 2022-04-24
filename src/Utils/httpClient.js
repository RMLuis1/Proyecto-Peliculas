const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDA2NzE5M2Y4MDJmMDBmODk2NjJjYWUyOGRmNzZkOCIsInN1YiI6IjYyMzYzM2U4NDZhZWQ0MDAxZTIzMGQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q3aAouS-95UTLDJCdHEPqnkCviXuIAo7DlDMurJtLtc",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
