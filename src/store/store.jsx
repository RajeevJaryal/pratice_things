import {createStore} from "redux";


const counterReducer=(state={counter:0, show:true},action)=>{
    if(action.type==="increment"){
        return{
            counter:state.counter+5,
            show:state.show
        }
    }
    if(action.type==="increment"){
        return{
            counter:state.counter+action.amount,
            show:state.show
        }
    }
    if(action.type==="decrement"){
        return{
            counter:state.counter-5,
            show:state.show
        }
    }
    if(action.type==="toggle"){
        return{
            show:!state.show,
            counter:state.counter

        }
    }
    return state
}

const store=createStore(counterReducer);

export default store;