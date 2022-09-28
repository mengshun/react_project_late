// 仓库入口文件
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducer";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
