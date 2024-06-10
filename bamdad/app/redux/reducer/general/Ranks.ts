import { RanksDataProps } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState:RanksDataProps[]=[]

const RanksPropsSlice=createSlice({
    name:"RanksPropsSlice",
    initialState,
    reducers:{
        setDataRanks: (state, action: { payload: RanksDataProps[] }) => {
            return [ ...state,...action.payload ]
          },
          emptyDataRanks: () => {
            return initialState
          },
    }
})

export const { setDataRanks, emptyDataRanks } = RanksPropsSlice.actions

export default RanksPropsSlice.reducer