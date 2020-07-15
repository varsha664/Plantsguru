import React, { useContext } from 'react';
import { MyContext } from './contextData/MyContext'
import { Link } from 'react-router-dom'
import { Progress ,  
     Button,Card,
     CardText, CardBody, CardLink, CardTitle} from 'reactstrap';
     import Navbar from './Navbar';
    //  import Footer from './Footer';
     import Alert from './Alert';
     
const AddToCart = () => {
  const {state:{cart},RemoveItem}=useContext(MyContext);
  return(

    <>
    <Navbar></Navbar>
    {!cart.length?(<Alert></Alert>):
    (<div class="row ml-4">
                            {cart.map(({ card, img, name, price }, index) => (
                                <>
                                    <div className="col-lg-3 col-sm-12">
                                        <div class="card shadow  h-100 w-180">

                                            <img class="card-img-top" width="400" height="200" src={img} alt="Card image cap" />
                                            <div class="card-body">
                                                <strong class="card-title" >{name}</strong><br />

                                                <button type="button" class="btn btn-default btn-sm ">{price}</button><br />
                                                <button type="button" class="btn btn-danger btn-sm mr-auto" onClick={(e) => RemoveItem(index)} >Remove</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>)}
    {/* <Footer></Footer> */}
    </>
  )
       
}
export default AddToCart
