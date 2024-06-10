import { AttachProps } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

interface CountryProps{
    id: string,
    code: string,
    name: string,
    name_en: string,
    name_fr: string,
    phone: string,
   
}

const initialState:CountryProps[]=[{
    id:'',
    code:"",
    name:'',
    name_en:'',
    name_fr:'',
    phone:""
}]

const CountrySlice=createSlice({
    name:"CountrySlice",
    initialState,
    reducers:{
        setDataCountry: (state, action: { payload: CountryProps[] }) => {
            return [ ...action.payload ]
          },
          emptyDataCountry: (state) => {
            state=[]
            return state
          },
    }
})

export const { setDataCountry, emptyDataCountry } = CountrySlice.actions

export default CountrySlice.reducer