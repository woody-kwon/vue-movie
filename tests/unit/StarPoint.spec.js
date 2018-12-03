import { shallowMount, mount } from '@vue/test-utils';
import StarPoint from '@/components/StarPoint.vue';

describe('StarPoint', () => {
  it('should exist component', () => {
    const wrapper = shallowMount(StarPoint);

    expect(wrapper.is(StarPoint)).toBe(true);
    expect(wrapper.exists()).toBe(true);
  });

  it('should passed props.point ', () => {
    const point = 1;

    const wrapper = shallowMount(StarPoint, {
      propsData: {
        point
      }
    });

    expect(wrapper.props().point).toBe(1);
  });
  it('should be inexist a star when passed props.point with 0', () => {
    const point = 0;

    const wrapper = shallowMount(StarPoint, {
      propsData: {
        point
      }
    });
 
    expect(wrapper.find('.star').exists()).toBe(false);
  });

  it('should be exist one star when passed props.point with 1', () => {
    const point = 5;
    
    const wrapper = shallowMount(StarPoint, {
      propsData: {
        point
      }
    });

    expect(wrapper.findAll('.star').length).toBe(3);
  });
});
