export type OrderItemDto = {
  productId: string;
  quantity: number;
  price: number; // snapshot price (smallest unit)
  name?: string; // optional snapshot fields
};

export type CreateOrderDto = {
  paymentMethod?: string; // e.g. 'cod' | 'card' etc.
  shippingAddress?: {
    line1: string;
    line2?: string;
    city: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
};

export type OrderResponseDto = {
  id: string;
  userId: string;
  total: number; // float or computed server-side
  status: string;
  items: OrderItemDto[];
  createdAt: string;
  updatedAt: string;
};
