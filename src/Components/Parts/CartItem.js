import React, { useContext, useState } from 'react' ;
import '../../Styles/CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import CloseIcon from '@mui/icons-material/Close';


function CartItem() {

    const {Allproduct , cartItems , removeFromCart , getTotalCartValue} = useContext(ShopContext);

    const promoCodes = {
      'DISCOUNT10': 'Promo code Applied : 30% discount',
      'WELCOME': 'Promo code Applied : Welcome discount',
      'SANKET2024': 'Promo code Applied : 30% Off',
      'sanket2024': 'Promo code Applied : 30% Off',
      'Sanket2024': 'Promo code Applied : 30% Off',
    };
    
    const [promoCode , setPromoCode] = useState ('') ;
    const [promoMsg , setPromoMsg] = useState ('') ;
    const [promoValid , setPromoValid] = useState (null) ;

    const handlePromo = () => {
  
        if (promoCodes[promoCode] && getTotalCartValue() >= 10000) {
          setPromoMsg(promoCodes[promoCode]);
          setPromoValid(true);
        }
        else if (getTotalCartValue() < 10000) {
          setPromoMsg('Applicable only for orders above ₹ 10000');
          setPromoValid(false);
        }
         else {
          setPromoMsg('Promo code not applicable !');
          setPromoValid(false);

        }
    }

    const handleChange = (e) => {
       setPromoCode(e.target.value) ;
    }


  return (
    <div className='cartitems'>
      <div className="main-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qunatity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='hrr'/>
      {Allproduct.map((e) => {
        if ( cartItems[e.id] > 0 ) {
            return (
                <div>
                    <div className=" main-format cart-items-format">
                    <img className ='product-icon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>&#8377;  {e.price}</p>
                    <button className='product-quantity'>{cartItems[e.id]}</button>
                    <p>&#8377; {e.price * cartItems[e.id] }</p>
                    <CloseIcon className ='closeicon' onClick ={ ()=> {removeFromCart(e.id)}}/>
                    

                    </div>
                    <hr />
            </div> 
      )}
      return null ;
        

      } )}
      <div className="cart-items-down">
       <div className="total-cart-items">
            <h1>Cart Total</h1>
            <div>
                <div className="total-items">
                    <p>Subtotal</p>
                    <p>&#8377; {getTotalCartValue()}.00</p>
                </div>
                <hr />
                <div className="total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                
                <div className="total-items">
                    <p>Cart Total</p>
                    <p>&#8377; {getTotalCartValue()}.00</p>
                </div>
                <hr />

                { promoValid && 
                    <>
                      <div className="total-items">
                          <p>Promotion Applied</p>
                          <p> - &#8377; { Math.round( getTotalCartValue() * 0.3 )}.00 </p>
                      </div>
                      <hr />
                      <div className="total-items">
                          <p>Total</p>
                          <p> &#8377; { Math.round(getTotalCartValue() - (getTotalCartValue() * 0.3)) }.00</p>
                          
                      </div> 
                    </>
                }
            </div>
            <button>PROCEED TO CHECKOUT</button>

        </div>

        <div className="promo-code">
            <p>If you have a promo code , Enter it here</p>
            <div>{ promoMsg && <p className={promoValid ? 'promo-valid' : 'promo-invalid'}>{promoMsg}</p>}</div>

            <div className="promo-box">
                <input type="text" placeholder='Promo Code' value = {null} onChange={handleChange} />
                <button onClick={handlePromo}>Submit</button>
            </div>
        </div>
      </div>



    </div>
  )
}

export default CartItem;
