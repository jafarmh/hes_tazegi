import { ExhibitionProps } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState:ExhibitionProps[]=[]

const ExhibitionPropsSlice=createSlice({
    name:"ExhibitionPropsSlice",
    initialState,
    reducers:{
        setDataExhibitionProps: (state, action: { payload: ExhibitionProps[] }) => {
            return [ ...state,...action.payload ]
          },
          emptyDataExhibitionProps: () => {
            return initialState
          },
    }
})

export const { setDataExhibitionProps, emptyDataExhibitionProps } = ExhibitionPropsSlice.actions

export default ExhibitionPropsSlice.reducer