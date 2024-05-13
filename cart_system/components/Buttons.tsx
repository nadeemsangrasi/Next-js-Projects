"use client";
import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
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

export const DetailButton = ({ id }: { id: string }) => {
  return (
    <button className="myBtn mx-auto md:mx-2 bg-blue-600 my-2 hover:bg-blue-500">
      <Link href={id}>View Detail</Link>
    </button>
  );
};

export const CartButton = ({ product }: { product: CartData }) => {
  let dispatch = useDispatch();

  function addCartItem(product: CartData): void {
    toast.success(`Product "${product.title}" added successfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch({ type: "ADD_TO_CART", payload: product });
  }
  return (
    <>
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
      <button
        onClick={() => addCartItem(product)}
        className="myBtn mx-auto md:mx-2 font-bold text-white px-4 py-2 text-lg rounded-lg hover:bg-green-500 bg-green-600"
      >
        Add to Cart
      </button>
    </>
  );
};
