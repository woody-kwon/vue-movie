import { getters } from '@/store.js';

describe('getters', () => {
  const state = {
    movies: [
      { releaseDate: '2018.11.20' },
      { releaseDate: '2018.11.21' },
      { releaseDate: '2018.11.22' },
    ],
  };

  it('releasedMovies', () => {
    const relMovies = getters.releasedMovies(state);
    expect(relMovies.length).toBe(2);
  });

  it('upcomingMovies', () => {
    const relMovies = getters.upcomingMovies(state);
    expect(relMovies.length).toBe(1);
  });
});
