import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home' ;
// import Club from './Components/Club' ;
// import Euro from './Components/Euro' ;
// import Copa from './Components/Copa' ;
import ShopCategory from './Components/ShopCategory' ;
import Cart from './Components/Cart';
import Register from './Components/Register';
import Login from './Components/Login';

import Footer from './Components/Parts/Footer';

import club_banner from './Assets/banner101.jpg' ;
import national_banner from './Assets/banners.jpg' ;
import clear_banner from './Assets/bannerucl.jpg' ;
import Product from './Components/Product';




function App() {
  return (
    <div className="App">
    

     <Router>
     
       <Navbar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/club' exact element={<ShopCategory  banner ={club_banner} category="club" title ="Season 2024/25"/>} />
            <Route path='/euro' element={<ShopCategory  banner ={national_banner} category="euro" title ="Internationals" />} />
            <Route path='/copa' element={<ShopCategory  banner ={clear_banner}  category="clear" title ="Clearance Sale"/>} />

            <Route path='/product' element={<Product />}>
              <Route path=':productID' element={<Product  />} />
                
            </Route>
            
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

          
        </Routes>

        <Footer />
     </Router>


    </div>
  );
}

export default App;
