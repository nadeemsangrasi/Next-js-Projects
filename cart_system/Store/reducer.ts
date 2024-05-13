interface Product {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
  stock: string;
  description: string;
}
interface CartState {
  data: Product[];
  myPrice: number;
}
let initialState: CartState = {
  data: [],
  myPrice: 0,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, data: [...state.data, action.payload] };
    case "DELETE_CART":
      let copyCarts = [...state.data];
      copyCarts.splice(action.id, 1);
      return { ...state, data: copyCarts };
    case "DELETE_ALL_CARTS":
      return { ...state, data: [] };
    case "PRICE":
      return { ...state, myPrice: action.price };
    default:
      return state;
  }
};
export default reducer;
