import React from 'react'
import { faker } from '@faker-js/faker'
import {useState} from 'react'
import SingleProduct from './SingleProduct'


faker.seed(100)

function Home() {



const products = [...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.avatar()
}))
const [product] = useState(products)

  return (
    <div style={{ textAlign: "center" }}>
    <span style={{ fontSize: 30 }}>Products Page</span>
    <div className="productContainer">
      {product.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} 
        />
      ))}
    </div>

  </div>
  )
}

export default Home