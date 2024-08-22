import React from 'react' ;
import '../../Styles/NewCollection.css'
import collections from '../../Data/Collections';
import Item from '../Item';

function NewCollection() {
  return (
    <div className='new-collection'>
      
        <h1>NEW ARRIVALS</h1>
        <hr />
        <div className="collection">
            {collections.map((item ,index) => {
                return <Item 
                    key = {index} 
                    id = {item.id}
                    image = {item.image}
                    hoverImg = {item.hoverImg}
                    name = {item.name}
                    price = {item.price}
                    newprice = {item.newprice}
                />

            })}
        </div>
      
    </div>
    
  )
}

export default NewCollection ;
