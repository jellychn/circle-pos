import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useRouter } from 'vue-router'
import BookItem from '../BookItem.vue'

vi.mock('vue-router')
// @ts-ignore:next-line
vi.mocked(useRouter).mockReturnValue({
    push: vi.fn()
  })

describe('BookComponent', () => {
  beforeEach(() => {
    vi.mocked(useRouter().push).mockReset()
  })

  it('renders book title', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      availableStock: 5,
      price: 10,
      isbn: '1234'
    }
    const wrapper = shallowMount(BookItem, {
      props: {
        book: book
      }
    })
    expect(wrapper.find('h2').text()).toBe('Test Book')
  })

  it('renders out of stock message when available stock is 0', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      availableStock: 0,
      price: 10,
      isbn: '1234'
    }
    const wrapper = shallowMount(BookItem, {
      props: {
        book: book
      }
    })
    expect(wrapper.find('h4 span').exists()).toBe(true)
    expect(wrapper.find('h4 span').text()).toBe('| Out of stock')
  })

  it('navigates to book detail page when available stock is greater than 0', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      availableStock: 5,
      price: 10,
      isbn: '1234'
    }
    const wrapper = shallowMount(BookItem, {
      props: {
        book: book
      }
    })
    wrapper.find('.contents').trigger('click')
    expect(useRouter().push).toHaveBeenCalledWith(`/book/${book.id}`)
  })

  it('disables click action when available stock is 0', () => {
    const book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      availableStock: 0,
      price: 10,
      isbn: '1234'
    }
    const wrapper = shallowMount(BookItem, {
      props: {
        book: book
      }
    })
    wrapper.find('.contents').trigger('click')
    expect(useRouter().push).not.toHaveBeenCalled()
  })
})
