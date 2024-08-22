import React from 'react';
import Banner from './Parts/Banner';
import Popular from './Parts/Popular';
import Quote from './Parts/Quote';
import NewCollection from './Parts/NewCollection';
import Offers from './Parts/Offers';
import Insta from './Parts/Insta';



function Home() {
  return (
    <div>
     <Quote />
      <Banner /> 
      <Popular />
      <Offers />
      <NewCollection />
      <Insta />
      
    </div>
  )
}

export default Home ;
