import apiService from "./api";

export async function getBook(id: number): Promise<Book> {
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
