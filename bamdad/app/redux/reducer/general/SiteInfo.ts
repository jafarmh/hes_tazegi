import { SiteInfoProps } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState:SiteInfoProps={
  about_us:"",
  email:"",
  instagram:"",
  link:"",
  phone:"",
  telegram:"", 
  fund:"",
  loginInfo:""
}

const SiteInfoPropsSlice=createSlice({
    name:"SiteInfoPropsSlice",
    initialState,
    reducers:{
        setDataSiteInfo: (state, action: { payload: SiteInfoProps }) => {
            return { ...state,...action.payload }
          },
          emptyDataSiteInfo: () => {
            return initialState
          },
    }
})

export const { setDataSiteInfo, emptyDataSiteInfo } = SiteInfoPropsSlice.actions

export default SiteInfoPropsSlice.reducer