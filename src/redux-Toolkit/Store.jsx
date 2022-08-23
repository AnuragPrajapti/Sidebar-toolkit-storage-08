import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/createSlice";

 const Store = configureStore({
    reducer :{
        users : userSlice
    }
 })

 export default Store;