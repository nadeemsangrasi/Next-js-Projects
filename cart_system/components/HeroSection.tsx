import React from "react";
import Card from "./Card";
import { FetchCartsData } from "@/lib/FetchCartsData";

interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const HeroSection = async () => {
  let { products }: { products: CartData[] } = await FetchCartsData();

  return (
    <section>
      <div className="min-h-[100vh] py-16 my-10 b">
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {products.map((cart: CartData) => (
            <>
              <Card
                product={cart}
                key={cart.id}
                id={cart.id.toString()}
                title={cart.title}
                price={cart.price}
                brand={cart.brand}
                category={cart.category}
                thumbnail={cart.thumbnail}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
