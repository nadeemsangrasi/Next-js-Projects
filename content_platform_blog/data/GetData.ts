export default async function GetData() {
  let fetchData = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`
  );
  return fetchData.json();
}
