import { actions } from '@/store';
import * as movie from '@/services/movie-service';

describe('actions', () => {
  it('getMovieList', async () => {
    const resp = [];
    movie.fetchAllMovies = jest.fn().mockResolvedValue(resp);

    const commit = jest.fn();

    await actions.getMovieList({ commit });

    expect(commit.mock.calls.length).toBe(1);
    expect(commit.mock.calls[0][0]).toBe('setMovies');
    expect(commit.mock.calls[0][1]).toBe(resp);
  });
});
