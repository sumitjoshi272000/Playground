//DUCKS pattern ===(everythig in one file => redux )
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface counterState {
  value: number;
  isLoggedIn: boolean;
}

const initialState: counterState = {
  value: 0,
  isLoggedIn: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      //it's okay to do it because of immers
      state.value++;
    },

    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },

    changeLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {incremented, amountAdded, changeLoggedIn} = counterSlice.actions;
export default counterSlice.reducer;
