import { getBooks } from "./getBooks";
import { getBook } from "./getBook";
import { purchaseBook } from "./purchaseBook";

export default {
  getBooks: getBooks,
  getBook: (id: number) => getBook(id),
  purchaseBook: (id: number) => purchaseBook(id)
};