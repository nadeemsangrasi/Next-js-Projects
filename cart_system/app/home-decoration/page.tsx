import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { FetchCartsData } from "@/lib/FetchCartsData";
import React from "react";
interface CartData {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const page = async () => {
  let { products }: { products: CartData[] } = await FetchCartsData();
  let filteredData: CartData[] = products.filter(
    (data: CartData) => data.category.toLowerCase() === "home-decoration"
  );
  return (
    <section>
      <Navbar />
      <div className="min-h-[100vh] py-16 my-10 b">
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {filteredData.map((cart: CartData) => (
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

export default page;
