import { AttachProps, CategoryProps } from "@/app/interface/Entity"

import { createSlice } from "@reduxjs/toolkit"

const initialState:CategoryProps[]=[]

const CategorySelectedValue=createSlice({
    name:"CategorySelectedValue",
    initialState,
    reducers:{
        setDataCategorySelectedValue: (state, action: { payload: CategoryProps[] }) => {
            return [ ...action.payload ]
          },
          emptyDataCategorySelectedValue: (state) => {
            state=[]
            return state
          },
    }
})

export const { setDataCategorySelectedValue, emptyDataCategorySelectedValue } = CategorySelectedValue.actions

export default CategorySelectedValue.reducer