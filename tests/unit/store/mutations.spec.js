import { mutations } from '@/store.js';

describe('mutations', () => {
  it('openMovieDetail', () => {
    const { openMovieDetail } = mutations;

    const state = {
      isMovieDetailOpen: false,
      movie: undefined,
    };
    const payload = {
      id: 1,
    };
    openMovieDetail(state, payload);

    expect(state.isMovieDetailOpen).toBe(true);
    expect(state.movie.id).toBe(1);
  });
});
