import {ADD_TO_CART, SUBSTRACT_AMOUNT, ADD_AMOUNT, DELETE_ITEM} from '../actions/cartActions';

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
    let {item} = action;
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];

        case SUBSTRACT_AMOUNT:
            item.amount-=1;
            return [ ...state.map( i => {
              if(i.product.id === action.item.product.id){
                  return item
              }
              return i
            })];

        case ADD_AMOUNT:
            item.amount +=1;
            let itemss= state.map( i => {
              if(i.product.id === action.item.product.id){
                  return item
              }
              return i
            });
            return itemss

        case DELETE_ITEM:
//            let nlist = state.filter(i=>{return i.product.id !== action.item.product.id})
            return [...state.filter(i=> {
              console.log(i)
              console.log(action.item)
              return i.product.id !== action.item.product.id
            })];
        default:
          return state
    }
};

export default cartReducer;
