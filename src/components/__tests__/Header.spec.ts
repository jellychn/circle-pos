import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

vi.mock('vue-router')
vi.mocked(useRouter).mockReturnValue({
  push: vi.fn()
})

describe('Header.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('calls navigateToHome when logo is clicked', async () => {
    const wrapper = shallowMount(Header)

    await wrapper.find('.logo').trigger('click')

    expect(useRouter().push).toHaveBeenCalledWith('/')
  })
})
