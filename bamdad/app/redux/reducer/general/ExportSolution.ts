import { AttachProps, CategoryProps, CountryProps, ExpertProps, ExportSolutionProps } from "@/app/interface/Entity"

import { createSlice } from "@reduxjs/toolkit"

const initialState:ExportSolutionProps[]=[]

const ExportSolutionSlice=createSlice({
    name:"ExportSolutionSlice",
    initialState,
    reducers:{
        setDataExportSolution: (state, action: { payload: ExportSolutionProps[] }) => {
            return [ ...state,...action.payload ]
          },
          emptyDataExportSolution: () => {
            return initialState
          },
    }
})

export const { setDataExportSolution, emptyDataExportSolution } = ExportSolutionSlice.actions

export default ExportSolutionSlice.reducer