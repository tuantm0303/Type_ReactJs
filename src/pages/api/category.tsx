import instance from "./instance";
import { isAuthenticate } from "../../utils/localStorage";
const user = isAuthenticate()

export const listCate = () => {
  const url = `/categories`;
  return instance.get(url)
}

export const add = (category: any) => {
  const url = `/categories/${user?.user._id}`;
  return instance.post(url, category, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const remove = (_id: number | string) => {
  const url = `/categories/${_id}/${user?.user._id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const readProOnCate = (_id: number | string | undefined) => {
  const url = `/categories/${_id}`;
  return instance.get(url);
}

export const read = (_id: number | string | undefined) => {
  const url = `/category/${_id}`;
  return instance.get(url);
}

export const update = (category: any) => {
  const url = `/categories/${category._id}/${user?.user._id}`;
  return instance.put(url, category, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}