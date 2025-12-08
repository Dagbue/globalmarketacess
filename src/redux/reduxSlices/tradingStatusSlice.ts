import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TradingStatusState {
    currentTradingType: string | null;
}

const initialState: TradingStatusState = {
    currentTradingType: "Forex",
};

const tradingStatusSlice = createSlice({
    name: "tradingStatus",
    initialState,
    reducers: {
        setTradingType: (state, action: PayloadAction<string>) => {
            state.currentTradingType = action.payload;
        },
        resetTradingType: (state) => {
            state.currentTradingType = null;
        },
    },
});

export const { setTradingType, resetTradingType } = tradingStatusSlice.actions;

export default tradingStatusSlice.reducer;