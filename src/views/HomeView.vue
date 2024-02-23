<template>
  <div class="content">
    <div v-if="bookStore.loading">
      <Loader />
    </div>
    <div v-if="!bookStore.loading">
      <div v-for="book in books" :key="book.id">
        <BookItem :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useBookStore } from '@/stores/books'
import BookItem from '@/components/BookItem.vue'
import type { Book } from '@/api/getBook'

const books = ref<Book[]>([])
const bookStore = useBookStore()

onMounted(async (): Promise<void> => {
  init()
})

async function init(): Promise<void> {
  await bookStore.getBooks()
  books.value = bookStore.books
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  min-height: 100vh;
  padding-top: var(--vt-header-padding);
  max-width: var(--vt-max-width);
  margin: 0 auto;
  overflow: hidden;
}
</style>