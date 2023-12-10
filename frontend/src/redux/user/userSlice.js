import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  email: null,
  name:null,
  error: null
  
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      signInsuccess: (state, action) => {
          state.currentUser=action.payload
    },
     setUser: (state, action) => {
       state.name=action.payload
    },
     setEmail: (state, action) => {
       state.email = action.payload;
    }
    ,
    logOut: (state) => {
       state.currentUser = null;
     }
  },
});
export const {
  signInsuccess,setUser,setEmail,logOut
} = userSlice.actions;
export default userSlice.reducer;
