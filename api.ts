const BASE_URL = `https://api.themoviedb.org/3`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWYyYTMyZDMwNTA4Nzk2ODllMDMxNWJmYTM0OWI1ZCIsInN1YiI6IjYwYWNmMGZmMGE1MTdjMDAyOTBlOTZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yI6PYHiiU2zcSljek6us_hiAi3ZVYygnGc-x8T_zfw4",
  },
};

export function fetchMovies() {
  return fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, options).then(
    (response) => response.json()
  );
}
