const BASE_URL = `https://api.themoviedb.org/3`;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export function fetchMovies() {
  return fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, options).then(
    (response) => response.json()
  );
}
