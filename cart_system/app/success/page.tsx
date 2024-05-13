"use client";
import { useSelector } from "react-redux";
interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const CheckoutSuccess = () => {
  const price = useSelector((state: { myPrice: number }) => state.myPrice);
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-center flex-col border-2 rounded-lg w-[60%] mx-auto my-16 border-gray-300">
        <img
          src="/images/order-iamge.webp"
          alt="orderImage"
          height={200}
          width={200}
        />
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold ">Order Has Placed Successfully</h1>
          <p className="text-lg py-1">
            Thankyou for shopping with SwiftCart Ecomercline
          </p>
          <h2 className="text-2xl font-semibold text-green-600">
            Kindly pay ammount <span className="text-red-400">${price} </span>
            during dilivery
          </h2>
        </div>
      </div>
    </div>
  );
};
export default CheckoutSuccess;
