import { BASE_URL_CATEGORIES } from "../constants";
const baseUrl = `${BASE_URL_CATEGORIES}/categories`

export const getCategoryListAPI = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(baseUrl, requestOptions)
    const data = await res.json()
    return data;
  } catch(e) {
    console.log(e);
  }
};

export const deleteCategoryAPI = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${baseUrl}/${id}`, requestOptions);
};

export const postCategoryAPI = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(baseUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const updateCategoryAPI = async (data, id) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(`${baseUrl}/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const getCategoryDetailAPI = async (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(`${baseUrl}/${id}`, requestOptions)
    const data = await res.json()
    return data;
  } catch(e) {
    console.log(e);
  }
};
