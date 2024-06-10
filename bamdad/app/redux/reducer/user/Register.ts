import { UserDataRegister } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState:UserDataRegister = {
    about: null,
    address: "",
    email: "",
    managerName: "",
    mobile: "",
    name: "",
    resume: null,
    status: 0,
    type: "general",
    webLink: null,
    image:undefined,
    resumeF:undefined,
    code:''
    
    
}


export const  UserRegisterSlice=createSlice({
    name: 'register',
    initialState,
    reducers:{
        setUserDataRegister: (state, action:{payload:UserDataRegister}) => {
            return { ...state, ...action.payload }
          },
          setUserCountryRegister: (state, action:{payload:any}) => {
            return { ...state, ...action.payload }
          },
     
          emptyUserDataRegister: () => {
            return initialState
          },
    }
})

export const { setUserDataRegister, emptyUserDataRegister,setUserCountryRegister } = UserRegisterSlice.actions

export default UserRegisterSlice.reducer