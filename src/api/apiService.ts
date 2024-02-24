import { getBooks } from "./getBooks";
import { getBook } from "./getBook";
import { purchaseBook } from "./purchaseBook";

//TODO: add tests
export default {
  getBooks: getBooks,
  getBook: (id: string) => getBook(id),
  purchaseBook: (id: string) => purchaseBook(id)
};