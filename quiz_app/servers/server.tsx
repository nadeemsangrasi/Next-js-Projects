import { Question, category } from "@/type/type";

export async function fetchData(
  amount: string,
  category: string,
  type: string
) {
  try {
    const response = await fetch(
      category.length == 0 && type.length == 0
        ? `https://opentdb.com/api.php?amount=${amount}`
        : category.length == 0
        ? `https://opentdb.com/api.php?amount=${amount}&difficulty=${type}`
        : type.length == 0
        ? `https://opentdb.com/api.php?amount=${amount}&category=${category}`
        : `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${type}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data: { results: Question[] } = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export const categories = async (): Promise<category[]> => {
  const res = await fetch("https://opentdb.com/api_category.php");
  let { trivia_categories } = await res.json();
  const data: category[] = trivia_categories.map((data: category) => {
    return {
      id: data.id,
      name: data.name,
    };
  });
  return data;
};
