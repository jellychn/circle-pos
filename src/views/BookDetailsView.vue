<template>
  <div class="content">
    <div v-if="bookStore.loading">
      <Loader />
    </div>
    <div v-if="book && !bookStore.loading">
      <div class="book-content">
        <div class="book-img">
          <img :src="bookImage" />
        </div>
        <div class="book-details">
          <h1>{{ book.title }}</h1>
          <h4>ISBN: {{ book.isbn }}</h4>
          <br />
          <h3>By: {{ book.author }}</h3>
          <h2>${{ book.price }}</h2>
          <p v-if="book.availableStock > 0">In Stock ({{ book.availableStock }})</p>
          <p v-if="book.availableStock === 0">Out of stock</p>
          <button
            @click="purchaseBook()"
            :disabled="book.availableStock === 0"
            :class="{
              disabled: book.availableStock === 0 || bookStore.processing,
              enabled: book.availableStock !== 0
            }"
          >
            {{ book.availableStock === 0 ? 'Unavailable' : 'Purchase' }}
          </button>
          <p v-if="!bookStore.processing && showText" class="text">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
import bookImage from '@/assets/book-placeholder.jpg'
import { useRoute } from 'vue-router'
import { type Book } from '@/api/getBook'
import { useBookStore } from '@/stores/books'
import Loader from '@/components/Loader.vue'

onMounted(async (): Promise<void> => {
  init()
})

let book = ref<Book | null>(null)
let showText = ref<boolean>(false)
let text = ref<string>('')

const route = useRoute()
const bookStore = useBookStore()

async function init(): Promise<void> {
  const id = route.params.id
  await bookStore.getBook(id)
  book.value = bookStore.book
}

async function purchaseBook(): Promise<void> {
  const id = route.params.id
  await bookStore.purchaseBook(id)
  book.value = bookStore.book
  await new Promise(resolve => setTimeout(resolve, 100));
  text.value = bookStore.error
    ? 'There was a error purchasing the book, please try again.'
    : 'Book purchased successfully.'
  showText.value = true

  setTimeout(() => {
    showText.value = false
  }, 3000)
}

</script>

<style lang="scss" scoped>
.content {
  position: relative;
  padding: var(--vt-header-padding) 20px 20px 20px;
  min-height: 100vh;

  .book-content {
    max-width: var(--vt-max-width);
    margin: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .book-img {
      width: 100%;
    }

    .book-details {
      margin: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;

      .text {
        margin-top: 10px;
      }

      h1 {
        font-size: 3rem;
        font-weight: bold;
      }

      h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 40px;
      }

      h3 {
        color: var(--vt-c-text-light-2);
      }
    }
  }

  button {
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
    background-color: var(--vt-c-white);
    border: 2px solid var(--vt-c-black);
  }
}

.enabled {
  cursor: pointer;
}

.disabled {
  opacity: 0.5;
  cursor: default;
}

.enabled:not([disabled]):hover {
  background-color: var(--vt-c-red);
  border-color: var(--vt-c-red);
  color: var(--vt-c-white);
}

@media (min-width: 640px) {
  .book-content {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .book-content {
    width: 600px;
  }
}
</style>