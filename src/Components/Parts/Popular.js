import React from 'react' ;
import '../../Styles/Popular.css' ;
import popular_data from '../../Data/PopularData';
import Item from '../Item';
 
function Popular() {
  return (
    <div className='popular'>
    <h1>POPULAR JERSEYS</h1>
    <hr />
    <div className="popular-items">
        {popular_data.map((item ,index) => {
            return <Item 
                key = {index} 
                id = {item.id}
                image = {item.image}
                hoverImg = {item.hoverImg}
                name = {item.name}
                price = {item.price}
            />

        })}
    </div>
      
    </div>
  )
}

export default Popular ;
