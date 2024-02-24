<template>
  <div :class="['book', book.availableStock === 0 ? 'disabled' : 'enabled']">
    <div class="contents" @click="navigateToBook(`/book/${book.id}`)">
      <img :src="bookImage" />
      <h2>{{ book.title }}</h2>
      <h4>{{ book.author }} <span v-if="book.availableStock === 0">| Out of stock</span></h4>
      <h3>${{ book.price }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore:next-line
import bookImage from '../assets/book-placeholder.jpg'
import { type Book } from '../api/getBook'

interface BookProps {
  book: Book
}

const props = defineProps<BookProps>()
  const { book } = toRefs(props)

const router = useRouter()
const navigateToBook = (path: string): void => {
  if (book.value.availableStock > 0) {
    router.push(path)
  }
}
</script>

<style lang="scss" scoped>
.book {
  float: left;
  margin-bottom: 30px;

  .contents {
    padding: 20px;

    img {
      width: 100%;
      margin: 0;
      padding: 0;
      display: block;
    }

    h2 {
      margin-top: 10px;
      font-weight: bold;
      height: 4em;
      font-size: 16px;
    }

    h3 {
      font-weight: 600;
    }

    h4 {
      color: var(--vt-c-text-light-2);
    }
  }
}

.enabled {
  cursor: pointer;
}

.enabled:hover img {
  box-shadow: 0 0 15px var(--vt-c-text-light-2);
}

.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (min-width: 440px) {
  .book {
    width: 100%;
  }
}

@media (min-width: 640px) {
  .book {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .book {
    width: 33.33%;
  }
}

@media (min-width: 1024px) {
  .book {
    width: 25%;
  }
}
</style>
