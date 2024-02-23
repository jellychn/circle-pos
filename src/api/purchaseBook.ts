import type { AxiosResponse } from "axios";
import apiService from "./api";

export async function purchaseBook(id: number): Promise<AxiosResponse> {
  return await apiService.post(`/books/${id}/purchase`);
}
