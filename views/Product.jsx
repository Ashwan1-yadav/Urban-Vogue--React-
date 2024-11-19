import React,{useContext} from 'react'
import { ShopContext } from '../src/Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../src/Components/BreadCrum'
import ProductShow from '../src/Components/ProductShow'

const Product = () => {
   const {Products} = useContext(ShopContext)
   const {productId} = useParams()
   const product = Products.find((item) => { return item.id === Number(productId)})
  return (
    <div className="">
      <BreadCrum  product={product}/>
      <ProductShow product={product}/>
      
    </div>
  )
}

export default Product