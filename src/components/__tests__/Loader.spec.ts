import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Loader from '@/components/Loader.vue'

describe('Loader.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Loader)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
