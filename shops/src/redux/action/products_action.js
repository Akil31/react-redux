import { ActionTypes } from "../constant/action-type";

export const addProudcts = product => {
    return {    
        type: ActionTypes.ADD_PRODUCTS,
        payload:product,
    };
}

export const selectedProducts = product => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        // payload: product,
    };
}

export const clearCart = product => {
    return {
        type: ActionTypes.CLEAR_CART,
        // payload: product,
    };
}

export const deletedProducts = product => {
    return {
        type: ActionTypes.DELETE_PRODUCTS,
        // payload: product,
    };
}

export const incresaseProducts = product =>{
    return{
        type: ActionTypes.INCREASE_PRODUCTS,
        // payload: product,
    }
};

export const decreaseProducts = product =>{
    return{
        type: ActionTypes.DECREASE_PRODUCTS,
        // payload: product,
    }
}

export function GetNumberCart(){
    return{
        type:ActionTypes.GET_NUMBER_CART,
    }
}