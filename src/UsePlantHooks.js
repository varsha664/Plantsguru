import React, { useEffect, useReducer} from 'react';
const UsePlantHooks = () => {
    const INITIAL_STATE = {
        cards: [],
       cart:[]
        
    }
    const reducer = (state, action) => {
        let { type, payload } = action
        const {cards, cart } = state;

        switch (type) {

           
            case 'API_DATA': {

                return {
                    ...state,
                    ...payload
                }
            }
           
            case 'ADD_TO_CART': {
                const { index } = payload;
                return {
                    ...state,
                    cart: [...cart, cards[index]]
                }
            }
          
            default: {
                return {
                    state
                }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    useEffect(() => {

        fetch('https://jsonblob.com/api/5dddde32-b9fc-11ea-9f6b-c3ed8d947e25').then(response => response.json().then(json => {
            dispatch({
                type: 'API_DATA',
                payload: {
                    cards: [...json]
                         }
            })
        }))
    }, [])
    const addToCart = (index) => {
        dispatch({ type: 'ADD_TO_CART', payload: { index } })
    }
   
    
  

 return {
        state,
    addToCart
     
   
    }
}
export default UsePlantHooks;