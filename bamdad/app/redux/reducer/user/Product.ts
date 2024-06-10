import { ProductData } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProductData[] = [
 
]

export const ProductMeSlice = createSlice({
    name: 'productMe',
    initialState,
    reducers: {
        setProductMeData: (state, action: { payload: ProductData[] }) => {

            return [ ...state,...action.payload ]
        },
        emptyProductMeData: () => {
            return initialState
        },
    }
})

export const { setProductMeData, emptyProductMeData } = ProductMeSlice.actions

export default ProductMeSlice.reducer