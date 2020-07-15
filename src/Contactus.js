import React from 'react';
import Navbar from './Navbar';
const Contact=()=>{
    return(
        <>
        <Navbar></Navbar>
        <header class="bg-secondary text-white"><p>Our Location</p></header>
        <div class="row">
            <div class="col-lg-3 col-sm-12">
                <img src="https://www.plantsguru.com/image/cache/catalog/PG-LOGO-full-268x50.png" height="80px"width="200px"></img>
            </div>
            <div class="col"><p class="text-secondary">Plantsguru</p>
<p>65, Gramsevak Prakshin Kendra, Pune<br/> Solapur Road, Manjari<br/>
Farm,Haveli, Pune, Maharashtra, 412307</p></div>
        
        <div class="col"><p class="text-secondary">Telephone</p><p>8468888666</p></div>
        <div class="col"><p class="text-secondary">Opening Times</p><p>(10am - 07pm)</p></div>
        </div>
        
        <header class="bg-secondary text-white"><p>Contact Form</p></header>
        
            <form action="" class=" form-horizontal">
            <div class="container">
            <fieldset>
        
            <div class="form-group required">
                <div class="row">
                <div class="col-sm-2"><label class=" control-label" for="name">Name:</label></div>
                <div class="col-sm-8"> <input type="text"name="Name" id="name" class="form-control"/></div>
                
                   </div>
                   </div>
                   <div class="form-group required">
                   <div class="row">
                <div class="col-sm-2"><label class=" control-label" for="Mobile">Mobile:</label></div>
                <div class="col-sm-8"> <input type="text"name="Mobile" id="Mobile" class="form-control"/></div>
                
                   </div>
                   </div>
                   <div class="form-group required">
                   <div class="row">
                <div class="col-sm-2"><label class=" control-label" for="Email">Email:</label></div>
                <div class="col-sm-8"> <input type="text"name="Email" id="Email" class="form-control"/></div>
                
                   </div>
                   </div>
                  
                   <button type="button" class="btn btn-primary  float-right">submit</button>
                   </fieldset>  </div>    
</form>
              
        </>
 )
}
export default Contact