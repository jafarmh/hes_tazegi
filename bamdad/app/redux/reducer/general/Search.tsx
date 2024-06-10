import { BrochureData, ExportSolutionProps, ProductData, UsersDataProps } from "@/app/interface/Entity";

import { createSlice } from "@reduxjs/toolkit";

const initialState:{
    users:UsersDataProps[],
    product:ProductData[],
    services:ProductData[],
    brochure:BrochureData[],
    solutions:ExportSolutionProps[]
}={
    users:[],
    brochure:[],
    product:[],
    services:[],
    solutions:[]
}

const SearchSlice=createSlice({
    initialState:initialState,
    name:"searchSlice",
    reducers:{
      setUser:(state, action: { payload: UsersDataProps[] }) => {
        return {...state,...{users:action.payload}}
      } ,
      setProduct:(state, action: { payload: ProductData[] }) => {
        return {...state,...{product:action.payload}}
      } ,
      setService:(state, action: { payload: ProductData[] }) => {
        return {...state,...{services:action.payload}}
      } ,
      setBrochure:(state, action: { payload: BrochureData[] }) => {
        return {...state,...{brochure:action.payload}}
      } ,
      setSolution:(state, action: { payload: ExportSolutionProps[] }) => {
        return {...state,...{solutions:action.payload}}
      } ,
      setUserEmpty:(state) => {
        state.users=[];
        return state
      } ,
      setProductEmpty:(state) => {
        state.product=[]
        return state
      } ,
      setServiceEmpty:(state) => {
        state.services=[]
        return state
      } ,
      setBrochureEmpty:(state) => {
        state.brochure=[]
        return state
      } ,
      setSolutionEmpty:(state) => {
        state.solutions=[]
        return state
      } ,
    }
})

export const {
    setUser,
    setBrochure,
    setProduct,
    setService,
    setSolution,
    setUserEmpty,
    setProductEmpty,
    setServiceEmpty,
    setBrochureEmpty,
    setSolutionEmpty
}=SearchSlice.actions
export default SearchSlice.reducer