export const FetchCartsData = async () => {
  let getData = await fetch("https://dummyjson.com/products");
  return getData.json();
};
