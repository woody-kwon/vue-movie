async function fetchAllMovies() {
  const response = await fetch('http://localhost:3000/movies');
  return await response.json();
}

export {
  fetchAllMovies,
};
