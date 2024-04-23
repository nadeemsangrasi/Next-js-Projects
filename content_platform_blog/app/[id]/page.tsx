import React from "react";
import GetData from "@/data/GetData";
interface CardData {
  title: string;
  slug: string;
  authorName: string;
  date: string;
  url: string;
  articleId: string;
  id: string;
  description: string;
  discription: string;
}
interface Field {
  fields: CardData;
}

const page = async ({ params }: { params: { id: string } }) => {
  let mydata = await GetData();
  let data = mydata.items.sort(
    (a: Field, b: Field) => parseInt(a.fields.id) - parseInt(b.fields.id)
  );
  let imagesData = mydata.includes.Asset.sort(
    (a: Field, b: Field) =>
      parseInt(a.fields.description) - parseInt(b.fields.description)
  );
  let { id } = params;
  let array: JSX.Element[] = [];

  data.filter((article: Field, i: number) => {
    if (article.fields.articleId.toLowerCase() === id.toLowerCase()) {
      array.push(
        <div>
          <div className=" lg:flex justify-between break-words ">
            <img
              className="w-[40%px] mx-auto"
              src={imagesData[i].fields.file.url}
              alt="image"
              width={650}
            />{" "}
            <div className="px-16 pt-4 lg:pt-0">
              <h1 className="text-[2.8rem] md:text-5xl font-bold leading-[55px] py-4 lg:py-0">
                {article.fields.slug}
              </h1>
              <p className="font-semibold pt-2 text-xl">Catagory</p>
              <h1 className="font-light pt-1 text-[16px]">
                {article.fields.title}
              </h1>
              <p className="font-semibold pt-2 text-xl ">Author</p>
              <h1 className="font-light pt-1 text-[16px]">
                {article.fields.authorName}
              </h1>
              <p className="font-semibold pt-2 text-xl">Date</p>
              <h1 className="font-light pt-1 text-[16px]">
                {article.fields.date}
              </h1>
            </div>
          </div>
          <p className="py-8 text-[1.6rem] text-justify font-light">
            {" "}
            {article.fields.discription}
          </p>
        </div>
      );
    }
  });

  return <div className="container mx-auto py-16">{array}</div>;
};

export default page;
