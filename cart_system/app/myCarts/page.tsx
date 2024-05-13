"use client";
import Categories from "@/components/Categories";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}
const page = () => {
  let dispatch = useDispatch();
  const router = useRouter();

  let price: number = 0;
  let handleDeletItem = (index: number, productName: string): void => {
    toast.success(`Product "${productName}" deleted successfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch({ type: "DELETE_CART", id: index });
    dispatch({ type: "DELETE_STORED_DATA", id: index });
  };

  let [isClicked, setIsClicked] = useState<boolean>(false);
  let [name, setName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [phoneNumber, setPhoneNumber] = useState<string>("");
  let [address, setAddress] = useState<string>("");
  function deleteCartItems(): void {
    if (cartItems.length > 0) {
      toast.success("All product deleted successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch({ type: "DELETE_ALL_CARTS" });
    }
  }
  const cartItems = useSelector((state: { data: CartData[] }) => state.data);

  cartItems.map((cart: CartData) => (price += cart.price));

  const handleCheckout = (): void => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <Categories />
      <div className="md:flex-row flex-col flex justify-between w-full my-6 ">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="w-full md:w-[65%]">
          <div className="flex justify-between w-full text-lg md:text-[1.7rem] font-bold px-4 py-2 mx-2 items-center">
            <h2> Image</h2>
            <h2>Brand</h2>
            <h2>category</h2>
            <h2> Price</h2>
            <h2>Action</h2>
          </div>
          {cartItems &&
            cartItems.map((item: CartData, index: number) => (
              <div className="flex justify-between w-full text-md md:text-xl font-light px-4 py-4 items-center mx-2 rounded-md bg-[#F2F8FB] my-3">
                <img
                  src={item.thumbnail}
                  alt="svg"
                  width={90}
                  height={90}
                  className="w-[50px] md:w-[90px]"
                />
                <h1>{item.title}</h1>
                <h2>{item.category}</h2>
                <h2>${item.price}</h2>
                <button
                  className="px-2 py-2 rounded-lg text-white font-semibold bg-red-500 hover:bg-red-400  text-sm md:text-xl md:myBtn"
                  onClick={() => handleDeletItem(index, item.title)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="w-full text-center md:w-[30%]">
          <h1 className="text-3xl font-bold py-4 mb-3">Total Amounts</h1>
          <h1
            className={`${
              price > 0 ? "text-green-600" : "text-red-500"
            } font-bold text-3xl py-6`}
          >
            ${price}
          </h1>
          <button
            onClick={() => handleCheckout()}
            className="myBtn bg-blue-500 hover:bg-blue-400 mx-auto  md:mx-2 my-2 md:my-0"
          >
            check out
          </button>
          <button
            onClick={deleteCartItems}
            className="myBtn bg-gray-500 hover:bg-gray-400  mx-auto md:mx-2"
          >
            Empty Cart
          </button>

          {isClicked ? (
            <div className="text-start  md:mx-2  mx-auto container my-2 ">
              <form
                action="#"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  if (price > 0) {
                    dispatch({ type: "PRICE", price: price });
                    router.push("/success");
                  } else {
                    toast.success(`Please add products first`, {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }
                }}
              >
                <label htmlFor="email" className="block font-bold text-xl">
                  Email address
                </label>
                <input
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="border-2 border-gray-300 px-2 py-2 rounded-lg w-full"
                />
                <label htmlFor="name" className="block font-bold text-xl py-1">
                  Name
                </label>
                <input
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="border-2 border-gray-300 px-2 py-2 rounded-lg w-full"
                />
                <label
                  htmlFor="number"
                  className="block font-bold text-xl py-1"
                >
                  Mobile Number
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.target.value)
                  }
                  type="text"
                  placeholder="Mobile Number"
                  id="number"
                  name="number"
                  className="border-2 border-gray-300 px-2 py-2 rounded-lg w-full"
                />
                <label
                  htmlFor="address"
                  className="py-1 block font-bold text-xl"
                >
                  Mobile Number
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="adress"
                  id="address"
                  placeholder="Address"
                  rows={3}
                  className="border-2 border-gray-300 rounded-lg block w-full py-1 mb-2 px-2"
                ></textarea>
                <button
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phoneNumber.length === 0
                  }
                  className={`${
                    name.length === 0 ||
                    email.length === 0 ||
                    phoneNumber.length === 0 ||
                    address.length == 0
                      ? "bg-green-300 myBtn font-bold "
                      : "bg-green-500 myBtn "
                  } mx-auto md:mx-0`}
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default page;
