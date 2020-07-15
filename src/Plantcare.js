import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
const Plantcare = () => {

    const [plant, setplant] = useState([])
    useEffect(() => {
        fetch('https://jsonblob.com/api/2b218035-b9e0-11ea-9f6b-bfd6da9f9928').then(response => response.json()).then(json => {
            setplant([...json])
        })
    }, []);
    return (
        <>
        <Navbar></Navbar>
          <div  class="container p-3 my-3 bg-secondary text-white">
        <h1 class="text-center">PLANTSGURU.COM</h1>
          </div>
           
                    
                <div class="container p-3 my-3 bg-light">
                    
               
                 
          
                <div class="row ml-4">
                    {plant.map(({img,text,text1,Description }) => (
                        <>
                            <div className="col-lg-4 col-sm-12">
                                <div class="card shadow  h-150 w-200">
                                    <img class="card-img-top" width="300" height="200" src={img} alt="Card image cap" />
                                    <div class="card-body">
                                        <h4 class="card-title" >{text}</h4><br/>
                    <p class="card-text">{text1}</p>
                    <p class="card-text">{Description}</p>

                                        
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                </div>
                
                </>
    )  
                }
 export default Plantcare