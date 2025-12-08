import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reduxSlices/counterSlice";
import tradingStatusReducer from "./reduxSlices/tradingStatusSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tradingStatus: tradingStatusReducer,
    },
});

// Type for dispatch and root state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;