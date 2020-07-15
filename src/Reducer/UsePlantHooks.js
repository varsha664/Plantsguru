import React, { useEffect, useReducer} from 'react';
const UsePlantHooks = () => {
    const INITIAL_STATE = {
        cards: [],
       cart:[],
       item:[],
       fplants:[],
       y:[],
       value:''
        
    }
    const reducer = (state, action) => {
        let { type, payload } = action
        const {cards, cart,value,fplants,y } = state;

        switch (type) {

           
            // case 'API_DATA': {

            //     return {
            //         ...state,
            //         ...payload
            //     }
            // }
           
            // case 'ADD_TO_CART': {
                
            //     const { index } = payload 
               
            //     return {
            //         ...state,
            //         cart: [...cards[index]],
                   
            //     }
            // }
            // case 'ITEM': {
 
            //     const { index } = payload
            //     return {
            //         ...state,
            //         item: [cards[index]],
     
            //     }
     
            // }
            // case 'onSearch': {
            //     return{
            //         ...state,
            //         ...payload
            //     }
            // }
          
            default: {
                return {
                    state
                }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    let {fplants,cards}=state;
    
    useEffect(() => {

        fetch('https://jsonblob.com/api/5dddde32-b9fc-11ea-9f6b-c3ed8d947e25').then(response => response.json().then(json => {
           console.log(json)
            // dispatch({
            //     type: 'API_DATA',
            //     payload: {
            //         cards: [...json],
            //         fplants:[...json]
            //              }
            // })
        }))
    }, [])
    const addToCart = (index) => {
        //dispatch({ type: 'ADD_TO_CART', payload: {  index}})
    }
    const Item = (index) => {
        // dispatch({
        //     type: 'ITEM',
        //     payload: { index }
        // })
    }
    function onSearch(value)  {
        let items =value.toLowerCase()
        // dispatch ({type: "onSearch",payload:{fplants:[...cards.filter(x => 
        //     x.type.toLowerCase()==items)]}})
    }
    
   
    
  

 return {
        state,
    addToCart,
    onSearch,
    Item
     
   
    }
}
export default UsePlantHooks