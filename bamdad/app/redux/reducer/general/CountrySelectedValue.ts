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

const initialState:CountryProps[]=[]

const CountrySelectedValueSlice=createSlice({
    name:"CountrySelectedValueSlice",
    initialState,
    reducers:{
        setDataCountrySelectedValue: (state, action: { payload: CountryProps[] }) => {
            return [ ...action.payload ]
          },
          emptyDataCountrySelectedValue: (state) => {
            state=[]
            return state
          },
    }
})

export const { setDataCountrySelectedValue, emptyDataCountrySelectedValue } = CountrySelectedValueSlice.actions

export default CountrySelectedValueSlice.reducer