import React, { useContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import { Link } from 'react-router-dom';
import { MyContext } from './contextData/MyContext';


const Mainpage = () => {
    const { state, Item, onSearch,handleAddToCart } = useContext(MyContext);

    var search = '';
    let { fplants, cards, cart, item } = state;
    
    function nowCheck() {
        var cont = document.getElementById('filter').children;

        for (var i = 0; i < cont.length; i++) {
             if (cont[i].tagName == 'INPUT' && cont[i].type == 'radio') {
                            

                if (cont[i].checked) {
                    
                    
                    search = cont[i].value;
                   
                    onSearch(search);
                }
            }
        }
    }
    return (

        <>
            <Navbar></Navbar>
            <div class="row">
                <div class="col-lg-3 col-md-5 col-sm-12 ">
                    <div class="container p-3 my-3 bg-light">
                        <section class="bg-secondary">
                            <div >
                                <h6 class="text-white">PLANTS BY CATEGORY</h6>
                            </div>
                        </section>
                        <section class="bg-light">

                            <div id="filter">  
                            <input type="radio" id="Indoor plants" name="plants" value="Indoor plants" onClick={() => nowCheck()}></input>
                                <label for="Indoor plants"> Indoor plants</label><br/>
                                <input type="radio" id="Medicinal plants" name="plants" value="medicinal plants"onClick={() => nowCheck()}></input>
                                <label for="Medicinal plants"> Medicinal plants</label><br/>
                                <input type="radio" id="Air Purifying plants" name="plants" value="Air Purifying plants" onClick={() => nowCheck()}></input>
                                <label for="Air Purifying plants"> Air Purifying plants</label><br/>
                                <input type="radio" id="Fragrant plants" name="plants" value="Fragrant plants"onClick={() => nowCheck()}></input>
                                <label for="Fragrant plants"> Fragrant plants</label><br/>
                                <input type="radio" id="Lucky bamboos" name="plants" value="Lucky bamboos"onClick={() => nowCheck()} ></input>
                                <label for="Lucky bamboos"> Lucky bamboos</label><br/>

                                <input type="radio" id="all" name="plants" value="all"onClick={() => nowCheck()} ></input>
                                <label for="all"> all</label>
                            </div></section>
                    </div>
                </div>


                <div class="col">
                    <div class="container p-3 my-3 bg-light">
                        <div class="row">
                            <div class="col bg-secondary text-white">
                                <h2 class="mt-3 text-center">PLANTS BY CATEGORY</h2></div>

                        </div>
                        <div class="row ml-4">
                            {fplants.map(({ card, img, name, price }, index) => (
                                <>
                                    <div className="col-lg-3 col-md-5 col-sm-12  mt-3">
                                        <div class="card shadow  h-100 w-180">

                                            <img class="card-img-top" width="400" height="200" src={img} alt="Card image cap" />
                                            <div class="card-body">
                                                <strong class="card-title" >{name}</strong><br />

                                                <button type="button" class="btn btn-default btn-sm ">{price}</button><br />
                                                <Link to={`/Cartpage/${name}`}><button type="button" class="btn btn-success btn-sm mr-auto" onClick={(e) => Item(name)} >ViewDetails</button></Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Mainpage