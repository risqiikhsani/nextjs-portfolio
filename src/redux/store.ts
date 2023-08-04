

import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";


// export default configureStore({
//   reducer: {
//     user: userReducer,
//     userProfile: userProfileReducer,
//     theme: themeReducer,
//     chatroom: chatroomReducer,
//     forgotPassword: forgotPasswordReducer,
//   },
// });

//https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
