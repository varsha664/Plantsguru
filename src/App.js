import React from 'react';



import Home from'./Home';
import Mainpage from './Mainpage';
import Plantcare from './Plantcare';
import Login from './Login';
import Footer from './Footer';
import Cartpage from './Cartpage';
import Contactus from './Contactus';


import AddToCart from './AddToCart'
import{BrowserRouter as Router,Route,Link}from 'react-router-dom';
import { CardTitle } from 'reactstrap';


function App() {
  return (
    
    <>
    

    
    <Router>
      
    <Route path="/" exact component={Home} /> 
    <Route path="/Home" exact component={Home} />
    <Route path="/mainpage" exact component={Mainpage} />
    <Route path="/Contactus" exact component={Contactus} />
    <Route path="/Plantcare" exact component={Plantcare} />
    <Route path="/Login" exact component={Login} />
    <Route path="/Cartpage" exact component={Mainpage} />
     <Route path="/Cartpage/:id" exact component={Cartpage} />
     <Route path="/Cart" exact component={AddToCart} />

    </Router>
    
    
    </>
  );
}


export default App;
