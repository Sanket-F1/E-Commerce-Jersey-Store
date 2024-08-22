import React, { useContext } from 'react';
import '../Styles/ShopCategory.css' ;
import { ShopContext } from '../Context/ShopContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Item from './Item';

const ShopCategory = (props) => {
    const {Allproduct} = useContext(ShopContext) ;

    return (
        <div className="shop-category">
        <img className="shop-banner" src={props.banner} alt="shop banner" />

         <h1>{props.title}</h1>
         <hr />
        
          <div className="shopcategory-indexsort">
            <p>
                <span>Showing 1 to 12</span> out of 18 products
            </p>

            <div className="shopcategory-sort">
                {/* Sort by <ArrowDropDownIcon /> */}
                <label>Sort by : </label>
                    <select >
                    <option value="">Select</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    </select>


            </div>
          </div>

          <div className="shopcategory-products">
             {Allproduct.map( (item , index)=> {
                if( props.category===item.category) {
                    return <Item 
                        key = {index} 
                        id = {item.id}
                        image = {item.image}
                        hoverImg = {item.hoverImg}
                        name = {item.name}
                        price = {item.price}
                        oldprice = {item.oldprice}
                    />
                }
                else {
                    return null ;
                }
             } )}
          </div>

          <div className="explore-more">
            Explore More
          </div>

        </div>
    )

}

export default ShopCategory ;
