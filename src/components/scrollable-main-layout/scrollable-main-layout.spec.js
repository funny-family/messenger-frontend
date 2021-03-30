import { mount } from '@vue/test-utils';
import ScrollableMainLayout from './scrollable-main-layout.component.vue';

describe('testing ScrollableMainLayout component', () => {
  test('ScrollableMainLayout component exists', () => {
    const wrappedComponent = mount(ScrollableMainLayout);

    expect(wrappedComponent.exists()).toBe(true);
  });
});
