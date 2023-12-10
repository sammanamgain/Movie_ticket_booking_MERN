import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null
  
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      signInsuccess: (state, action) => {
          state.currentUser=action.payload
   }
  },
});
export const {
  signInsuccess
} = userSlice.actions;
export default userSlice.reducer;
