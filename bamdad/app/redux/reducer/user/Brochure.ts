import { AttachProps, BrochureData } from "@/app/interface/Entity"

import { createSlice } from "@reduxjs/toolkit"

const initialState: BrochureData[] = [
  
]


export const BrochureMeSlice = createSlice({
    name: 'BrochureMe',
    initialState,
    reducers: {
        setBrochureMeData: (state, action: { payload: BrochureData[] }) => {

            return [ ...state,...action.payload ]
        },
        emptyBrochureMeData: () => {
            return initialState
        },
    }
})

export const { setBrochureMeData, emptyBrochureMeData } = BrochureMeSlice.actions

export default BrochureMeSlice.reducer