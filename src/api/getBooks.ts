import apiService from "./api";
import type { Book } from "./getBook";

export async function getBooks(): Promise<Book[]> {
  const response = await apiService.get('/books');
  return response.data.books;
}
