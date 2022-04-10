export type productType = {
  _id: number | string,
  title: string,
  image: string,
  priceNew: number,
  priceOld: number,
  sale: string,
  desc: string,
  status: number,
  categoryId: string,
  slug: string
}

export type postType = {
  id: number,
  title: string,
  desc: string,
  author: string,
  category: string,
  thumbnail: string,
  status: string,
}

export type categoryType = {
  _id: number | string,
  name: string,
}

export type userType = {
  _id: number | string,
  name: string,
  email: string,
  password: string,
  role: number
}