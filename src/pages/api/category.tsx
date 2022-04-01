import instance from "./instance";

export const list = () => {
  const url = `/categories`;
  return instance.get(url)
}

export const add = (category: any) => {
  const url = `/categories`;
  return instance.post(url, category);
}

export const remove = (id: number) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
}

export const read = (id: any) => {
  const url = `/categories/${id}`;
  return instance.get(url);
}

export const update = (category: any) => {
  const url = `/categories/${category.id}`;
  return instance.put(url, category);
}