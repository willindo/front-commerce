"use client";
import EnhancedCartPage from "@/components/EnhancedCartPage";
import OrderDetailsPage from "@/components/OrderDetailsPage";
// import React from 'react'
import ProductDetailPage from "@/components/ProductDetailPage";
const Order = { id: "order1", status: "Shipped", total: 59.97, items: [] };
const OrderItem = {
  name: "Sample T-Shirt",
  quantity: 2,
  priceAtPurchase: 19.99,
};
const cartItems = [
  {
    id: "item1",
    productId: "1",
    name: "Sample T-Shirt",
    price: 22,
    quantity: 2,
    // product: { name: "Sample T-Shirt", price: 19.99 },
  },
  {
    id: "item2",
    productId: "2",
    quantity: 1,
    name: "another shirt",
    price: 34,
    // product: { name: "Another T-Shirt", price: 24.99 },
  },
];
const product = {
  id: "1",
  name: "Sample T-Shirt",
  price: 19.99,
  description: "A comfortable cotton t-shirt.",
  images: [
    "https://via.placeholder.com/300x300.png?text=T-Shirt+Front",
    "https://via.placeholder.com/300x300.png?text=T-Shirt+Back",
  ],
  category: { name: "Apparel" },
};
function page() {
  return (
    <>
      <OrderDetailsPage order={Order} />
      <EnhancedCartPage items={cartItems} />
      <ProductDetailPage product={product} />
    </>
  );
}

export default page;
