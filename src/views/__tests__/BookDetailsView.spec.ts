// @ts-nocheck
import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { useRoute } from 'vue-router'
import BookDetailsView from '../BookDetailsView.vue'

const id = '123'
const bookStoreMock = {
  loading: false,
  processing: false,
  error: null,
  book: {
    id,
    title: 'Test Book',
    isbn: '123456789',
    author: 'Test Author',
    price: 10,
    availableStock: 5
  },
  getBook: vi.fn(),
  purchaseBook: vi.fn().mockImplementation(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
    bookStoreMock.book.availableStock--
  })
}

vi.mock('@/stores/books', () => ({
  useBookStore: () => bookStoreMock
}))

vi.mock('vue-router')
vi.mocked(useRoute).mockReturnValue({
  params: {
    id
  }
})

describe('BookDetailsView.vue', () => {
  it('updates book and displays correct text when purchaseBook is called', async () => {
    const wrapper = shallowMount(BookDetailsView)

    await wrapper.vm.purchaseBook()

    expect(bookStoreMock.purchaseBook).toHaveBeenCalled()
    expect(wrapper.vm.book.availableStock).toBe(4)

    expect(wrapper.vm.text).toBe('Book purchased successfully.')

    expect(wrapper.vm.showText).toBe(true)

    await new Promise((resolve) => setTimeout(resolve, 3000))
    expect(wrapper.vm.showText).toBe(false)
  })
})
