import React from 'react' ;
import '../Styles/ProductInfo.css' ;
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

function ProductInfo(props) {

   const {product} = props ;

  return (
    <div className='product-path'>
       <Link to='/'>Home</Link><KeyboardArrowRightIcon />  {product.category} <KeyboardArrowRightIcon /> {product.name}
    </div>
  )
}

export default ProductInfo ;
