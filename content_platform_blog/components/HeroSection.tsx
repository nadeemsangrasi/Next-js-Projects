import React from "react";
import Card from "./Card";
import GetData from "@/data/GetData";
interface CardData {
  title: string;
  slug: string;
  authorName: string;
  date: string;
  url: string;
  articleId: string;
  id: string;
}
interface Field {
  fields: CardData;
}
export const HeroSection = async () => {
  let mydata = await GetData();
  let data = mydata.items.sort(
    (a: Field, b: Field) => parseInt(a.fields.id) - parseInt(b.fields.id)
  );
  let imagesData = mydata.includes.Asset.sort(
    (a: any, b: any) =>
      parseInt(a.fields.description) - parseInt(b.fields.description)
  );

  return (
    <section>
      <h1 className="pt-9 pb-3 px-3 text-[2.6rem]  md:text-start text-center  md:text-5xl font-bold">
        CONTENT PLATFORM
      </h1>
      <div className="min-h-[100vh]  bg-[#E5E5E5]  py-16 my-10 ">
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {data.map((cardData: Field, i: number) => (
            <Card
              url={imagesData[i].fields.file.url}
              title={cardData.fields.title}
              slug={cardData.fields.slug}
              author={cardData.fields.authorName}
              date={cardData.fields.date}
              route={cardData.fields.articleId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
