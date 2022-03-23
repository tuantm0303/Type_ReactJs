import instance from "./instance";

export const list = () => {
  const url = `/products`;
  return instance.get(url)
}

export const add = (product: any) => {
  const url = `/products`;
  return instance.post(url, product);
}

export const remove = (id: any) => {
  const url = `/product/${id}`;
  return instance.delete(url);
}

export const read = (id: any) => {
  const url = `/product/${id}`;
  return instance.get(url);
}

export const update = (product: any) => {
  const url = `/product/${product.id}`;
  return instance.put(url, product);
}