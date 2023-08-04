import { createSlice } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

const initialState = {
  user: null,
  token: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});
//   name: "user",
//   initialState,
//   reducers: {
//     setUser: (state, action) => action.payload.user
//   }
//   case "LOGIN":
//     localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         user: action.payload.user,
//         token: action.payload.token
//       };

//   name: "user",
//   initialState: [],
//   reducers: {
//     setUser: (state, action) => action.payload,
//   },
// });

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
