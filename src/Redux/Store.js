import { counterReducer } from "./Counterslice";
import { configureStore } from"@reduxjs/toolkit";
import { movieReduser } from "./Movieslice";
import { tvReducer } from "./Tvslice";



let store = configureStore({
    reducer:{
        counter:counterReducer,
        movie:movieReduser,
        tv:tvReducer,
        
    }
})
export default store;