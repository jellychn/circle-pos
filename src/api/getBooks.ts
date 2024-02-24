import apiService from "./api";
import type { Book } from "./getBook";

// TODO: add tests and parse data
export async function getBooks(): Promise<Book[]> {
  const response = await apiService.get('/books');
  return response.data.books;
}
