import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HomeView from '../HomeView.vue'

const mockGetBooks = vi.fn()
const bookStoreMock = {
  loading: false,
  books: [],
  getBooks: mockGetBooks
}

vi.mock('../../stores/books', () => ({
  useBookStore: () => bookStoreMock
}))

vi.mock('../../components/BookItem', () => 'BookItem')
vi.mock('../../components/AppLoader', () => 'AppLoader')

describe('HomeView.vue', () => {
  it('renders no books loading is true', async () => {
    bookStoreMock.loading = true
    const wrapper = shallowMount(HomeView)

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('BookItem').length).toBe(0)
  })

  it('renders books when loading is false', async () => {
    bookStoreMock.loading = false
    const wrapper = shallowMount(HomeView)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('AppLoader').exists()).toBe(false)
  })

  it('should populate books when initialized', async () => {
    const wrapper = shallowMount(HomeView)

    await wrapper.vm.$nextTick()

    expect(mockGetBooks).toHaveBeenCalled()
  })
})
