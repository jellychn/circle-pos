import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Book } from '../api/getBook'
import apiService from '../api/apiService'

export const useBookStore = defineStore('books', (): BookStoreProps => {
  const loading = ref<boolean>(false)
  const processing = ref<boolean>(false)
  const error = ref<boolean>(true)
  const books = ref<Book[]>([])
  const book = ref<Book | null>(null)

  async function getBook(id: string): Promise<void> {
    loading.value = true
    error.value = false
    try {
      book.value = await apiService.getBook(id)
    } catch {
      console.error(`Error fetching book with id: ${id}.`)
    } finally {
      loading.value = false
    }
  }

  async function getBooks(): Promise<void> {
    loading.value = true
    error.value = false
    try {
      books.value = await apiService.getBooks()
    } catch {
      console.error('Error fetching books.')
    } finally {
      loading.value = false
    }
  }

  async function purchaseBook(id: string): Promise<void> {
    processing.value = true
    error.value = false

    if (!book.value?.id) {
      return
    }
    try {
      await apiService.purchaseBook(id)
      book.value = { ...book.value, availableStock: (book.value?.availableStock || 0) - 1 }
    } catch {
      console.error(`Error purchasing book with id: ${id}.`)
      error.value = true
    } finally {
      processing.value = false
    }
  }

  return { book, books, loading, error, processing, getBook, getBooks, purchaseBook }
})

interface BookStoreProps {
  book: Ref<Book | null>
  books: Ref<Book[]>
  loading: Ref<boolean>
  processing: Ref<boolean>
  error: Ref<boolean>
  getBook: (id: string) => Promise<void>
  getBooks: () => Promise<void>
  purchaseBook: (id: string) => Promise<void>
}
