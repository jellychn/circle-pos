import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
