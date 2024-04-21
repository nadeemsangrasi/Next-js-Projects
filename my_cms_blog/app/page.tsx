import Post from "@/components/Post";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      <div className="card container flex items-center justify-center mt-28 space-x-32  mx-auto">
        <div className="text-center gap-1 w-[300px] flex flex-col items-center shadow-2xl rounded-lg shadow-gray-400 p-5">
          <img
            className="rounded-md"
            src="https://i.ytimg.com/vi/UeV98nSrSZ4/sddefault.jpg"
            alt="image"
            width={250}
            height={250}
          />
          <h1 className="font-bold text-2xl">
            <Link href={"explore-what-ecotherapy"}>Artcle 1</Link>
          </h1>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            officiis impedit
          </h2>
        </div>
        <div className=" shadow-2xl rounded-lg shadow-gray-400 p-5 gap-1 text-center w-[300px] flex items-center flex-col">
          <img
            className="rounded-md"
            src="https://i.ytimg.com/vi/Vo1AsgZRt2M/hqdefault.jpg?v=622766e7"
            alt="image"
            width={250}
            height={250}
          />
          <h1 className="font-bold text-2xl">
            <Link href={"exploring-the-benefits-of-ecotherapy"}>Artcle 2</Link>
          </h1>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            officiis impedit
          </h2>
        </div>
      </div>
    </>
  );
}
