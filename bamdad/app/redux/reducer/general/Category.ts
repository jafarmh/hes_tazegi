import { AttachProps } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

interface CategoryProps{
    id:string,
    name:string,
    name_en:string,
    name_ar:string,
    attach:AttachProps[],
    have_child: boolean,
    parent: string,
}

const initialState:CategoryProps[]=[{
    id:'',
    name:'',
    name_en:'',
    name_ar:'',
    have_child:false,
    parent:"0",
    attach:[],
}]

const categorySlice=createSlice({
    name:"categorySlice",
    initialState,
    reducers:{
        setDataCategory: (state, action: { payload: CategoryProps[] }) => {
            return [ ...action.payload ]
          },
          emptyDataCategory: (state) => {
            state=initialState
            return state
          },
    }
})

export const { setDataCategory, emptyDataCategory } = categorySlice.actions

export default categorySlice.reducer