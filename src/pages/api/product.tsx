import instance from "./instance";

export const list = () => {
  const url = `/products`;
  return instance.get(url)
}

export const add = (product: any) => {
  const url = `/products`;
  return instance.post(url, product);
}

export const remove = (_id: number | string) => {
  const url = `/products/${_id}`;
  return instance.delete(url);
}

export const read = (id: number | string | undefined) => {
  const url = `/products/${id}`;
  return instance.get(url);
}

export const update = (product: any) => {
  const url = `/products/${product._id}`;
  return instance.put(url, product);
}