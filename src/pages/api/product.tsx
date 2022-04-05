import { isAuthenticate } from "../../utils/localStorage";
import instance from "./instance";
const user = isAuthenticate()

export const list = () => {
  const url = `/products`;
  return instance.get(url)
}

// export const add = (product: any) => {
//   const url = `/products`;
//   return instance.post(url, product);
// }

export const add = (product: any) => {
  const url = `/products/${user?.user._id}`;
  return instance.post(url, product, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const remove = (_id: number | string) => {
  const url = `/products/${_id}/${user?.user._id}`;
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}

export const read = (id: number | string | undefined) => {
  const url = `/products/${id}`;
  return instance.get(url);
}

export const update = (product: any) => {
  const url = `/products/${product._id}/${user?.user._id}`;
  return instance.put(url, product, {
    headers: {
      "Authorization": `Bearer ${user?.token}`
    }
  });
}