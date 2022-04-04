import instance from "./instance";

export const listCate = () => {
  const url = `/categories`;
  return instance.get(url)
}

export const add = (category: any) => {
  const url = `/categories`;
  return instance.post(url, category);
}

export const remove = (_id: number | string) => {
  const url = `/categories/${_id}`;
  return instance.delete(url);
}

export const readCate = (_id: number | string | undefined) => {
  const url = `/categories/${_id}`;
  return instance.get(url);
}

export const update = (category: any) => {
  const url = `/categories/${category._id}`;
  return instance.put(url, category);
}