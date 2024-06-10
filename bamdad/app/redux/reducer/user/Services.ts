import { AttachProps, ServicesData } from "@/app/interface/Entity"

import { createSlice } from "@reduxjs/toolkit"

const initialState: ServicesData[] = [
 
]


export const ServicesMeSlice = createSlice({
    name: 'ServicesMe',
    initialState,
    reducers: {
        setServicesMeData: (state, action: { payload: ServicesData[] }) => {
            return [ ...state,...action.payload ]
        },
        emptyServicesMeData: () => {
            return initialState
        },
    }
})

export const { setServicesMeData, emptyServicesMeData } = ServicesMeSlice.actions

export default ServicesMeSlice.reducer