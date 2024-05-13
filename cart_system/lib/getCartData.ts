import { FetchCartsData } from "./FetchCartsData";
interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}
export async function getCartData(id: string) {
  let { products } = await FetchCartsData();
  return products.find((cart: CartData) => cart.id.toString() === id);
}
