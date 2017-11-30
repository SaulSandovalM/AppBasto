import {ADD_TO_CART, SUBSTRACT_AMOUNT, ADD_AMOUNT, DELETE_ITEM} from '../actions/cartActions';

const INITIAL_STATE = [];

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];
        case SUBSTRACT_AMOUNT:
            let items= state.filter(i=>{return i.product.id !== action.item.product.id})
            return [...items, action.item];
        case ADD_AMOUNT:
            let itemss= state.filter(i=>{return i.product.id !== action.item.product.id})
            return [...itemss, action.item];
        case DELETE_ITEM:
//            let nlist = state.filter(i=>{return i.product.id !== action.item.product.id})
            return [...state.filter(i=> {
                i.product.id !== action.item.product.id
            })];
        default:
            return state
    }
};

export default cartReducer;