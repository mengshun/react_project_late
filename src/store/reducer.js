// 创建初始状态

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "homepath",
  initialState: {
    num: 123,
    abc: {
      a: "B",
      c: "D",
    },
  },
  reducers: {
    increaseNum(state, action) {
      state.num += action.payload;
      console.log("reducers - addNum", action);
    },
    decreaseNum(state, action) {
      state.num -= action.payload;
      console.log("reducers - decreaceNum", action);
    },
  },
});

export const { increaseNum, decreaseNum } = slice.actions;
export const numSelector = (state) => state.home.num;
export default slice.reducer;
