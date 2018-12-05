import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Movie from '@/views/Movie.vue';
import MovieDetail from '@/components/MovieDetail.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Movie.vue', () => {
  let getters;
  let actions;
  let store;
  let mutations;

  beforeEach(() => {
    getters = {
      releasedMovies: jest.fn(),
      upcomingMovies: jest.fn(),
    };
    actions = {
      getMovieList: jest.fn(),
    };
    mutations = {
      openMovieDetail(state, payload) {
        state.isMovieDetailOpen = true;
        state.movie = payload;
      },
    };
    store = new Vuex.Store({
      state: {
        isMovieDetailOpen: false,
        movies: [],
      },
      getters,
      actions,
      mutations,
    });
  });

  it('should dispatchs getMovieList when mounted', () => {
    shallowMount(Movie, { store, localVue });

    expect(actions.getMovieList.mock.calls.length).toBe(1);
  });

  it('should show MovieDetail when isMovieDetailOpen is true', () => {
    const wrapper = shallowMount(Movie, { store, localVue });

    expect(wrapper.find(MovieDetail).isVisible()).toBe(false);
  });

  it('should show MovieDetail when isMovieDetailOpen is true', () => {
    const wrapper = shallowMount(Movie, { store, localVue });

    store.commit('openMovieDetail', {});

    expect(wrapper.find(MovieDetail).isVisible()).toBe(true);
  });
});
