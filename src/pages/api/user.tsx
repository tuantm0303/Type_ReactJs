import instance from "./instance";
import { isAuthenticate } from "../../utils/localStorage";
const users = isAuthenticate()

export const list = () => {
  const url = `/users`;
  return instance.get(url)
}

export const signup = (user: any) => {
  const url = `/signup`;
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
  const url = `/users/${user._id}/${users?.user._id}`;
  return instance.patch(url, user, {
    headers: {
      "Authorization": `Bearer ${users?.token}`
    }
  });
}

export const read = (_id: number | string | undefined) => {
  const url = `/users/${_id}`;
  return instance.get(url);
}