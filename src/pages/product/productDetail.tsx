// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { get } from '../api/product';

type Props = {}

function ProductDetail(props: Props) {
  const { id } = useParams();
  console.log(id)

  return (
    <div>
      <h2>Now showing post {id}</h2>
    </div>
  );
}

export default ProductDetail