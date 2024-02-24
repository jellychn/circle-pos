import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppLoader from '../AppLoader.vue'

describe('AppLoader.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(AppLoader)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
