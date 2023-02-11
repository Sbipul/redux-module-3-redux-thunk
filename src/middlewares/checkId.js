import { ADD_TO_CART } from "../redux/actionTypes/actionTypes"

const cartCounter = (store)=>(next)=>(action)=>{
    console.log('current state',store.getState())
    console.log('action', action)
    if (action.type=== ADD_TO_CART) {
        return
    }

    return next(action)
}
export default cartCounter