import {fetchAllMovies} from '@/services/movie-service';

describe('movie service', () => {
  it('should return array', async () => {
    const resp = [];

    const fakeFetch = jest.fn().mockImplementation( ()=> Promise.resolve({
      json: () => Promise.resolve(resp)
    }));
    window.fetch = fakeFetch;

    const json = await fetchAllMovies();

    expect(json).toEqual([]);
    expect(fakeFetch.mock.calls.length).toBe(1);
    expect(fakeFetch.mock.calls[0]).toContain('http://localhost:3000/movies');
  });
});