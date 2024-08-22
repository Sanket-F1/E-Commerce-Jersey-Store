import React, { useContext } from 'react' ;
import '../Styles/Product.css'
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductDisplay from './ProductDisplay';
import { ShopContext } from '../Context/ShopContext';

function Product() {

    const {Allproduct} = useContext(ShopContext) ;
    const {productID} = useParams() ;
    const product = Allproduct.find ( (e) => e.id === Number(productID) )


  return (
    <div className='product'>
      <ProductInfo  product = {product} />
      <ProductDisplay product = {product}/>
    </div>
  )
}

export default  Product ;
