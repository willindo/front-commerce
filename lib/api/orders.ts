// lib/api/orders.ts
import { api } from "./axios";

export type OrderItem = {
  id: string;
  productId: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  userId: string;
  total: number;
  items: OrderItem[];
  status: string;
  createdAt: string;
  updatedAt: string;
};

export async function createOrder(cartId: string): Promise<Order> {
  const { data } = await api.post(`/orders`, { cartId });
  return data;
}

export async function getOrders(userId: string): Promise<Order[]> {
  const { data } = await api.get(`/orders/user/${userId}`);
  return data;
}

export async function getOrderById(orderId: string): Promise<Order> {
  const { data } = await api.get(`/orders/${orderId}`);
  return data;
}
