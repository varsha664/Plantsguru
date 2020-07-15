import React, { useEffect, useReducer} from 'react';
const UseReducer = () => {
    const INITIAL_STATE = {
        cards: [],
       cart:[],
       item:[],
       fplants:[],
       
       value:''
        
    }
    const reducer = (state, action) => {
        let { type, payload } = action
        const {cards, cart,value,fplants } = state;

        switch (type) {

           
            case 'API_DATA': {

                return {
                    ...state,
                    ...payload
                }
            }
           
            case 'ADD_TO_CART': {
                
                const { name} = payload 
               
                return {
                    ...state,
                    cart: [...cart,...cards.filter(a=>a.name==name)],
                   
                }
            }
            case 'REMOVE': {
                
                const { index} = payload 
               
                return {
                    ...state,
                    cart: [...cart.filter((a,ind)=>ind!=index)],
                   
                }
            }
            case 'ITEM': {
 
                const {name } = payload
                return {
                    ...state,
                    item: [...cards.filter(a=>a.name==name)],
     
                }
     
            }
            case 'onSearch': {
                return{
                    ...state,
                    ...payload
                }
            }
            case 'DECREMENT_COUNTER': {
                const { index } = payload
                cart[index].quantity--
                return {
                    ...state,
                    cart: [...cart]
                }
            }
    
            case 'INCREMENT_COUNTER': {
                const { index } = payload
                cart[index].quantity++
                return {
                    ...state,
                    cart: [...cart]
                }
            }
    
            
            case 'TOTAL_AMOUNT': {
                return {
                    ...state,
                    totalAmount: cart.reduce((acc, item) => acc + parseInt(item.price) * item.quantity, 0)
                }
            }
            case 'cartItem':{
                return{
                    ...state,
                ...payload
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
    let {fplants,cards,cart}=state;
    
    useEffect(() => {

        fetch('https://jsonblob.com/api/5dddde32-b9fc-11ea-9f6b-c3ed8d947e25').then(response => response.json().then(json => {
           
            dispatch({
                type: 'API_DATA',
                payload: {
                    cards: [...json],
                    fplants:[...json]
                         }
            })
        }))
    }, [])
    const additem = (name) => {
        
        dispatch({ type: 'ADD_TO_CART', payload: { name}})
    }
    const RemoveItem = (index) => {
        
        dispatch({ type: 'REMOVE', payload: { index}})
    }
    const Item = (name) => {
        dispatch({
            type: 'ITEM',
            payload: { name }
        })
    }
    function onSearch(value)  {

    (value=='all')?( fplants=[...cards]):(fplants=[...cards.filter(x =>x.type==value)]) 
            
         
        dispatch ({
            type: "onSearch",
            payload:{fplants:fplants}
        })
    }
    
    const decrementCounter = (index) =>  {
        dispatch({ type: 'DECREMENT_COUNTER', payload: { index } })
    }
    const incrementCounter = (index) =>{
        dispatch({ type: 'INCREMENT_COUNTER', payload: { index } })
    }
    const removeUpdate = (index) => {
        dispatch({ type: 'DELETE_ITEMS', payload: { index } })
    }
    const handleAddToCart = (index,card) => {
        let x=[];
        x.push(card)
      cart=[...cart, ...x]
        console.log(cart)
      dispatch ({type: "cartItem",payload:{cart:[...cart]}})
      console.log(state)
    }
  

 return {
        state,
    additem,
    onSearch,
    RemoveItem,
    handleAddToCart,
    Item
     
   
    }
}
export default UseReducer