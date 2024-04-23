import Card from "@/components/Card";
import GetData from "@/data/GetData";
import React from "react";
interface CardData {
  title: string;
  slug: string;
  authorName: string;
  date: string;
  url: string;
  articleId: string;
  id: string;
  description: string;
}
interface Field {
  fields: CardData;
}

const page = async () => {
  let mydata = await GetData();

  let data = mydata.items.sort(
    (a: Field, b: Field) => parseInt(a.fields.id) - parseInt(b.fields.id)
  );
  let imagesData = mydata.includes.Asset.sort(
    (a: Field, b: Field) =>
      parseInt(a.fields.description) - parseInt(b.fields.description)
  );
  let array: JSX.Element[] = [];
  data.filter((artcle: Field, i: number) => {
    if (artcle.fields.title.toLowerCase() === "news") {
      array.push(
        <Card
          url={imagesData[i].fields.file.url}
          title={artcle.fields.title}
          slug={artcle.fields.slug}
          author={artcle.fields.authorName}
          date={artcle.fields.date}
          route={artcle.fields.articleId}
        />
      );
    }
  });

  return (
    <div>
      <div className="min-h-[100vh]  bg-[#E5E5E5]  py-16 my-10 ">
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {array}
        </div>
      </div>
    </div>
  );
};

export default page;
