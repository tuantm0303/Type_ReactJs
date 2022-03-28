import instance from "./instance";

export const list = () => {
  const url = `/posts`;
  return instance.get(url)
}

export const add = (post: any) => {
  const url = `/posts`;
  return instance.post(url, post);
}

export const remove = (id: number) => {
  const url = `/posts/${id}`;
  return instance.delete(url);
}

export const read = (id: any) => {
  const url = `/posts/${id}`;
  return instance.get(url);
}

export const update = (post: any) => {
  const url = `/posts/${post.id}`;
  return instance.put(url, post);
}