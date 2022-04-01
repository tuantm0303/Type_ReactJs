export type productType = {
  id: number,
  title: string,
  image: string,
  priceOld: number,
  priceNew: number,
  sale: string,
  desc: string,
  status: number,
  categoryId: number
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
  id: number,
  name: string,
}

export type bookType = {
  id: number,
  categoryId: number,
  name: string,
  price: number
}