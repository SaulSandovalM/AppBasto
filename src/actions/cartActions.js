export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_AMOUNT = "ADD_AMOUNT";
export const SUBSTRACT_AMOUNT = "SUBSTRACT_AMOUNT";
export const DELETE_ITEM = "DELETE_ITEM";

export function addToCart(item) {
    return {type: ADD_TO_CART, item}
}

export function addAmount(item) {
    return {type: ADD_AMOUNT, item}
}

export function substractAmount(item) {
    item["amount"] -=1;
    return {type: SUBSTRACT_AMOUNT, item}
}

export function deleteItem(item) {
    return {type: DELETE_ITEM, item}
}
