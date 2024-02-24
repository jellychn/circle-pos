import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppFooter from '../AppFooter.vue'

describe('AppFooter.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(AppFooter)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
