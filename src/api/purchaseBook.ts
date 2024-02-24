import type { AxiosResponse } from "axios";
import apiService from "./api";

// TODO: add tests
export async function purchaseBook(id: string): Promise<AxiosResponse> {
  return await apiService.post(`/books/${id}/purchase`);
}
