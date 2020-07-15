import React, { useContext } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import{Link} from 'react-router-dom';
import { MyContext } from './contextData/MyContext';

const Cartpage = () => {

    const {state:{item},additem}=useContext(MyContext);
    
    return (
        
        <>
      <Navbar></Navbar>
        {window.scrollTo(0, 0)}
        
        <div class="container">
        <div class="row">
{item.map(({img,name,Line1,Line2,Line3,Line4,coupon,flat,price,Description}) => (
            <>
        <div class="container-fixed bg-light">
            <div class="col-lg-6 col-sm-12">
                <img  src={img} height="450" width="400"></img>
            </div>
            </div>
            <div class="col-lg-6 col-sm-12">
    <h4 class="text-danger">{name}</h4><span class="material-icons small">star</span>
    <span class="material-icons small">star</span>
    <span class="material-icons small">star</span>
    <span class="material-icons small">star</span>
    <span class="material-icons small">star</span>
    <p>{Line1}</p><p>{Line2}</p><p>{Line3}</p><p >{Line4}</p>
    <p class="text-success">{coupon}</p><p class="text-danger">{flat}</p><h4>{price}</h4><br/>
    <Link to="/mainpage"><button type="button" class="btn btn-success btn-lg ">Category</button></Link>

    <button type="button" class="btn btn-warning btn-lg "  onClick={(e)=>additem(name)}>add to cart</button>

            </div>
            
        <div class="row ">
        <div class="col-lg-12 col-sm-12">
            <h5>Description</h5>
    <p>{Description}</p>
        </div>
        </div>
        
        </>
        ))}
       
       </div>
        </div>
        
        </>
    )
}
export default Cartpage