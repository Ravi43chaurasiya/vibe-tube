import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
  name:"app",
  initialState:{
    isMenuOpen:true,
    isOnWatchPage:false,
  },
  reducers:{
    toggleMenu:(state)=>{
      state.isMenuOpen=!state.isMenuOpen;
    },
    menuClose:(state)=>{
      state.isMenuOpen=false
      state.isOnWatchPage=true
    }

  }
})

export const {toggleMenu,menuClose}=appSlice.actions;
export default appSlice.reducer;