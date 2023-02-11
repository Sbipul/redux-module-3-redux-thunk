import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const initialState = {
    filters:{
        brand:[],
        stock:false
    },
    keywords:""
}

export const filterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_BRAND:
            if (!state.filters.brand.includes(action.payload)) {
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        brand:[...state.filters.brand,action.payload]
                    }
                }
            }else{
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        brand:state.filters.brand.filter(brnd => brnd !== action.payload)
                    }
                }
            }
            
        case TOGGLE_STOCK:
            return {}
        default:
            return state;
    }
    
}