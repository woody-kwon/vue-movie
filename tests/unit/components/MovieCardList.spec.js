import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieCardList from '@/components/MovieCardList.vue';
import MovieCard from '@/components/MovieCard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MovieCardList', () => {
  let store;
  let mutations;

  const mockOpenMovieDetail = jest.fn();
  beforeEach(() => {
    mutations = {
      openMovieDetail: mockOpenMovieDetail,
    };
    store = new Vuex.Store({
      state: {
        isMovieDetailOpen: false,
        movies: [],
      },
      mutations,
    });
  });

  it('should exist MovieCard when passed props.movise with a movie', () => {
    const wrapper = shallowMount(MovieCardList, {
      propsData: {
        titleName: '',
        movies: [{
          id: 1,
        }],
      },
    });

    expect(wrapper.find(MovieCard).exists()).toBe(true);
  });

  it('should commit openMovieDetail when MovieCard clicked', () => {
    const wrapper = mount(MovieCardList, {
      store,
      localVue,
      propsData: {
        titleName: '',
        movies: [{
          id: 1,
        }],
      },
    });

    wrapper.find(MovieCard).trigger('click', {});

    expect(mockOpenMovieDetail.mock.calls.length).toBe(1);
  });
});
