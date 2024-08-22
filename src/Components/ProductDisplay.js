import React, { useContext ,useState} from 'react' ;
import '../Styles/ProductDisplay.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { ShopContext } from '../Context/ShopContext';



function ProductDisplay(props) {

  const [selectedSize, setSelectedSize] = useState(null); 

  const handleSizeClick = (size) => {
    setSelectedSize(size); 
  };


    const {product} = props ;
    const {addToCart} = useContext(ShopContext) ;

  return (
    <div className='product-display'>
      <div className="product-display-left">
            <div className="img-list">
              <img src={product.image2} alt="" />
              <img src={product.image3} alt="" />
              <img src={product.image4} alt="" />

            </div>

            <div className="product-display-img">
              <img className= 'main-img' src={product.image} alt="" />
            </div>

        </div>

      <div className="product-display-right">
            <h1>{product.name}</h1>

            <div className="stars">
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarIcon className='star'/>
            <StarHalfIcon className='star'/>
            <StarBorderIcon className='star'/>
            
            <p>(122)</p>
            </div>

           

            <div className="product-display-right-prices">
              <div className="newprice">&#8377; {product.price}</div>
              <div className="oldprice"> {product.oldprice}</div>
              
            </div>

            <div className="select-size">
              <h1>Select Size</h1>
              
              {/* <div className="sizes">
              <div className='size '>S</div>
              <div className='size'>M</div>
              <div className='size'>L</div>
              <div className='size'>XL</div>
              <div className='size'>XXL</div>
              </div> */}

              <div className="sizes">
          <div className={`size ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => handleSizeClick('S')}>S</div>
          <div className={`size ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => handleSizeClick('M')}>M</div>
          <div className={`size ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => handleSizeClick('L')}>L</div>
          <div className={`size ${selectedSize === 'XL' ? 'active' : ''}`} onClick={() => handleSizeClick('XL')}>XL</div>
          <div className={`size ${selectedSize === 'XXL' ? 'active' : ''}`} onClick={() => handleSizeClick('XXL')}>XXL</div>
        </div>

            </div>

            <button onClick={()=> {addToCart(product.id)} }>ADD TO CART</button>
            <div className="description">
              {product.description}
            </div>

      </div>
      
      
    </div>
  )
}

export default ProductDisplay ;
