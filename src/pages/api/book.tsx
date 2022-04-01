import instance from "./instance";

export const list = () => {
  const url = `/books`;
  return instance.get(url)
}

export const add = (book: any) => {
  const url = `/books`;
  return instance.post(url, book);
}

export const remove = (id: number) => {
  const url = `/books/${id}`;
  return instance.delete(url);
}

export const read = (id: any) => {
  const url = `/books/${id}`;
  return instance.get(url);
}

export const update = (book: any) => {
  const url = `/books/${book.id}`;
  return instance.put(url, book);
}