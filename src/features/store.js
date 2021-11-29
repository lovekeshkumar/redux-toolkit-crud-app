import {configureStore} from "@reduxjs/toolkit";
import PostReducer from "./postSlice";


export const store = configureStore ({
    reducer:{
        app: PostReducer,
    },
});

