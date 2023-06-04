import { ActionTypes } from "../constant/action-type";

const initialState = {
    numberproducts: 0,
    products: [],

    };
// console.log(initialState)
export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCTS:
            return {
                ...state,
                products: payload,
                // numberproducts: state.numberproducts + 1,
            };
        default:
            return state;
    }
}

export const selectedProuctsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {
                ...state,
                ...payload
            };
        // case ActionTypes.DELETE_PRODUCTS:
        //     return{};
        default:
            return state;
    }
}

export const deletedProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.DELETE_PRODUCTS:
            //   let id_ = state[payload].id
            return {
                ...state,
                // numberproducts:state.numberproducts-state.products.id,
                // products: state.products.filter(product =>{ 
                //     return product.name !== payload.id}),
                // numberproducts: state.numberproducts - id_,
                products:state.products.filter((products) => {
                    return products.id != state.products.id
                })
            };
        default:
            return state;
    }
}

export const incresaseProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.INCREASE_PRODUCTS:
            return {
                ...state,
                product: payload++,
                numberproducts: state.numberproducts++,

            };
        default:
            return state;
    }
}
export const getNumberCartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCTS:
            return {
                ...state
            }
    }
}

