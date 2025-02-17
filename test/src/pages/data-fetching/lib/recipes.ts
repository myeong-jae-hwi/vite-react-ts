import type { Recipes, Recipe } from '../types';

const ENDPOINT = 'https://dummyjson.com/recipes';

interface Options {
  q?: string;
  limit?: number;
  startIndex?: number;
  fields?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export const addRecipes = async (newRecipe: Partial<Recipe>) => {
  try {
    const response = await fetch('https://dummyjson.com/recipes/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    });

    if (!response.ok) {
      throw new Error('레시피 추가에 실패했습니다');
    }

    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getRecipes = async ({
  q = '',
  limit = 10,
  startIndex = 0,
  fields = '',
  sortBy = 'id',
  order = 'asc',
}: Options = {}) => {
  let requestQuery = `${ENDPOINT}/`;

  if (q.trim().length > 0) {
    requestQuery += `search/?q=${q}`;
  }

  if (limit) {
    requestQuery += requestQuery.includes('?')
      ? `&limit=${limit}`
      : `?limit=${limit}`;
  }

  if (startIndex) {
    requestQuery += `&skip=${startIndex - 1}`;
  }

  if (fields.trim().length > 0) {
    requestQuery += `&select=${fields}`;
  }

  if (sortBy) {
    requestQuery += `&sortBy=${sortBy}`;
  }

  if (order) {
    requestQuery += `&order=${order}`;
  }

  return (await fetch(requestQuery).then((response) =>
    response.json()
  )) as Recipes;
};

export const getRecipeById = async (id: string | number) => {
  return (await fetch(`${ENDPOINT}/${id}`).then((response) =>
    response.json()
  )) as Recipe;
};
function async(arg0: {}) {
  throw new Error('Function not implemented.');
}
