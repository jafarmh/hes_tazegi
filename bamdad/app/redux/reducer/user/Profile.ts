import { AttachProps, CategoryUserProps, ProfileData } from "@/app/interface/Entity"

import { CountriesUserProps } from './../../../interface/Entity';
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProfileData = {
    about: '',
    address: "",
    email: "",
    id: 1,
    managerName: "",
    mobile: "",
    name: "",
    resume: '',
    status: 0,
    type: "general",
    webLink: '',
    instagram: '',
    telegram: '',
    attach:[],
    categories:[],
    countries:[],
    rank:{
        color:"",
        id:"",
        name:"",
        price:0,
        description:""
    }
    
}


export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: { payload: ProfileData }) => {

            return { ...state, ...action.payload }
        },
        emptyProfileData: () => {
            return initialState
        },
    }
})

export const { setProfileData, emptyProfileData } = ProfileSlice.actions

export default ProfileSlice.reducer