import React, { useState, useEffect } from 'react';
import Navbar from'./Navbar';
import Carouselpart from'./Carouselpart';
import{Link} from 'react-router-dom';
import Footer from './Footer';

const Home = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://jsonblob.com/api/6566d726-b9e1-11ea-9f6b-cf07f9924d9e').then(response => response.json()).then(json => {
            setItem([...json])
        })
    }, []);
    return (
        <>
           <Navbar></Navbar> 
           <div class="row bg-success text-center">
       
     <div class=" col-lg-3 col-sm-12"><p class="text-white " ><i class="fas fa-clock"></i> 2 hours Delivery</p></div>
     <div class="  col-lg-3 col-sm-12"> <p class="text-white"><i class="fas fa-truck"></i>Free Shipping</p></div>
     <div class=" col-lg-3 col-sm-12"><p class="text-white "> <i class="fas fa-gift"></i>21 Thousand+gifts</p></div>
     <div class=" col-lg-3 col-sm-12"> <p class="text-white"><i class="fas fa-smile"></i>6 million Happy Customers</p></div>
       </div>
           <Carouselpart></Carouselpart>
                    
                <div class="container p-3 my-3 bg-light">
                <div class="row">
                <div class="col">    
                <h2 class="mt-3 text-center">Plants By Category</h2></div>
                 <div class="col-2"><Link to="/mainpage"><button type="button" class="btn btn-success btn-lg">View all</button></Link></div>
                </div>
                <div id="a" class="row ml-4">
                    {item.map(({image, name }) => (
                        <>
                            <div className="col-lg-3 col-md-5 col-sm-12 mt-3">
                                <div class="card shadow  h-150 w-100">
                                    <img class="card-img-top" width="300" height="200" src={image} alt="Card image cap" />
                                    <div class="card-body">
                                        <strong class="card-title" >{name}</strong><br/>
                                        
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                </div>
                
                <br />
                <div class="container ">
                    
                    <img class="img-fluid" src="https://shop.plants.com/images/summer%20hero_20200619-1592603211207.jpg" height="400" width="1000"></img>

                </div>
             
               <br/>
                
                <div class="container p-4 bg-light">
                <h2 class="text-center">Add More to your Plants</h2>
                <div class="row">
                    
                          <div class="col"><img class="img-fluid" src="https://i7.fnp.com/images/pr/l/pineapple-cake-with-money-plant_1.jpg" height="300"width="280"></img></div>
                          <div class="col"><img class="img-fluid"src="https://i7.fnp.com/images/pr/l/2-layer-lucky-bamboo-in-thank-you-vase-with-dairy-milk-silk-chocolates_1.jpg"height="300"width="280"></img></div>
                          
                          <div class="col"><img class="img-fluid"src="https://i7.fnp.com/images/pr/l/ferrero-rocher-n-money-plant-combo_1.jpg"height="300"width="280"></img></div>
                    
                </div>
                </div>
            
                <Footer></Footer>
        </>
    )
}

export default Home