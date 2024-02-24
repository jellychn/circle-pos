import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { useRouter } from 'vue-router'
import AppHeader from '../AppHeader.vue'

vi.mock('vue-router')
// @ts-ignore:next-line
vi.mocked(useRouter).mockReturnValue({
  push: vi.fn()
})

describe('AppHeader.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(AppHeader)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('calls navigateToHome when logo is clicked', async () => {
    const wrapper = shallowMount(AppHeader)

    await wrapper.find('.logo').trigger('click')

    expect(useRouter().push).toHaveBeenCalledWith('/')
  })
})
