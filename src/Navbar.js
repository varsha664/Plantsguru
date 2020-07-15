import React, { useState,useContext } from 'react';
import './App.css';
import{Link} from 'react-router-dom';
import { MyContext } from './contextData/MyContext'
const Navbar=()=>{
  const { state: { cart }} = useContext(MyContext)
    return(
      <>

        <nav class="navbar navbar-expand-sm navbar-light bg-light"  >
            <div class="navbar-header">
            <img src="https://3.imimg.com/data3/VQ/AR/MY-16272399/prof-500x500.png" height="80" width="200"></img>
            </div>
            <ul class="navbar-nav nav-justified w-100 text-center ">
    <li class="nav-item ">
    <Link to="/Home">  <a  href="#"  class="nav-link d-flex flex-column"> 
       
      <strong><i class="fas fa-home"></i>Home</strong></a></Link >
    </li>
    
    <li class="nav-item">
    <Link to="/Contactus"><a  href="#"  class="nav-link d-flex flex-column">
   <strong><i class="fas fa-id-badge"></i>Contact us</strong></a></Link>
     </li>
    <li class="nav-item ">
    <Link to="/Plantcare">  <a  href="#"  class="nav-link d-flex flex-column"><strong> <i class="fas fa-leaf"></i>Plant Care</strong></a></Link>
    </li>

    <li class="nav-item ">
    <Link to="/Login">  <a  href="#"  class="nav-link d-flex flex-column"><strong><i class="fas fa-sign-in-alt"></i>Login</strong></a></Link>
    </li>
   <Link to="/cart"> <li class="nav-item ">
    <a  href="#"  class="nav-link d-flex flex-column"><strong><i class="fas fa-cart-arrow-down"></i>({cart.length}) Cart</strong></a>
     </li></Link>
    </ul> 
     </nav>
     
  </>   
       
)

}
export default Navbar