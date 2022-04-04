import instance from "./instance";

export const list = () => {
  const url = `/users`;
  return instance.get(url)
}

export const signup = (user: any) => {
  const url = `/users`;
  return instance.post(url, user);
}

export const remove = (_id: number | string) => {
  const url = `/users/${_id}`;
  return instance.delete(url);
}

export const signin = (user: any) => {
  const url = "/signin";
  return instance.post(url, user);
};

export const update = (user: any) => {
  const url = `/users/${user.id}`;
  return instance.put(url, user);
}