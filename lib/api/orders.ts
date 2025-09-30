import { api } from "./axios";
import type { CreateOrderDto, OrderResponseDto } from "../types/order";

export async function createOrder(
  data?: CreateOrderDto
): Promise<OrderResponseDto> {
  const res = await api.post<OrderResponseDto>("/orders", data ?? {});
  return res.data;
}

export async function fetchOrders(): Promise<OrderResponseDto[]> {
  const res = await api.get<OrderResponseDto[]>("/orders");
  return res.data;
}

export async function fetchOrder(id: string): Promise<OrderResponseDto> {
  const res = await api.get<OrderResponseDto>(`/orders/${id}`);
  return res.data;
}
