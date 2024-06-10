import { BrochureData } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: BrochureData = {
    title: ''  ,
    description: '',
    id: 0,
    user_id: '',
    attach: [],
    user:{
        id:'',
        about: '',
        address: '',
        deleted_at: '',
        email: '',
        managerName: '',
        mobile: '',
        name: '',
        resume:"",
        status:0,
        type:"general",
        webLink:"",
        instagram:"",
        telegram:"",
        attach:[]
    }
 
}

export const BrochureDetailSlice = createSlice({
    name: 'BrochureDetail',
    initialState,
    reducers: {
        setBrochureDetailData: (state, action: { payload: BrochureData }) => {

            return { ...action.payload }
        },
        emptyBrochureDetailData: () => {
            return initialState
        },
    }
})

export const { setBrochureDetailData, emptyBrochureDetailData } = BrochureDetailSlice.actions

export default BrochureDetailSlice.reducer