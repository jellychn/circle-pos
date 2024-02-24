import apiService from "./api";

// TODO: add tests and parse data
export async function getBook(id: string): Promise<Book> {
  const response = await apiService.get(`/books/${id}`);
  return response.data.book;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  price: number;
  availableStock: number;
}
