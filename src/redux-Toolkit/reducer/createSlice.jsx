const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
   User: localStorage.getItem("register") ? JSON.parse(localStorage.getItem("register")) : [],
   isEdit : [],
   id:'',
   loginData : []
}

const userSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
      registerData: (state, action) => {
         state.User.push(action.payload)
         localStorage.setItem("register", JSON.stringify(state.User));
      },
      deleteData: (state, action) => {
         const deleteData = state.User
         deleteData.splice(action.payload,1);
         localStorage.setItem("register",JSON.stringify([...deleteData]))
      },
      editData : (state,action)=>{
         state.id = action.payload
      },
      updateData : (state,action)=>{
         state.User[action.payload.id] = action.payload
         localStorage.setItem("register",JSON.stringify(state.User)) 
      },
      loginData : (state,action)=>{
         state.User[action.payload] =  action.payload
      }  
   }
})

export const { registerData, deleteData , editData , updateData , loginData } = userSlice.actions;

export default userSlice.reducer;