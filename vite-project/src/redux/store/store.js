import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import dataReducer from "./dataSlice";
import { useReducer } from "react";
import usersReducer from "./usersSlice";

    const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        users: usersReducer
    },
});
export default store;
