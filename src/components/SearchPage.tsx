import { useEffect, useState } from 'react'
import { search } from '../pages/api/product'
import { productType } from '../pages/type'

function SearchPage() {
  const [product, setProduct] = useState<productType[]>([])
  useEffect(() => {
    const handleSearch = async (key: string) => {
      const { data } = await search(key)
      console.log(data)
    }
    // handleSearch(key)
  }, [])
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage