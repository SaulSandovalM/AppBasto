import {ADD_TO_CART, SUBSTRACT_AMOUNT, ADD_AMOUNT, DELETE_ITEM} from '../actions/cartActions';

const INITIAL_STATE = [];
import {Toast} from 'native-base';

const cartReducer = (state = INITIAL_STATE, action) => {
    let {item} = action;
    switch (action.type) {
        case ADD_TO_CART:
            Toast.show({
                text: 'Producto Agregado',
                position: 'bottom',
                duration: 1000
            });
            let nLista = state.filter(p=>{
                return p.product.id !== action.item.product.id
            });

            let repetido = state.find(p => {
                return p.product.id === action.item.product.id
            });

            if(repetido !== undefined){
                repetido.amount +=1;
                return [...nLista, repetido]
            }

    return [...state, action.item];


        case SUBSTRACT_AMOUNT:
            if(item.amount >1){
                item.amount-=1;
            }else {item.amount =1}

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
            return itemss;

        case DELETE_ITEM:
            return [...state.filter(i=> {
              return i.product.id !== action.item.product.id
            })];
        default:
          return state;
    }
};

export default cartReducer;
