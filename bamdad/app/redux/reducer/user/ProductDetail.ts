import { ProductData } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ProductData = {
    title: ''  ,
    price: '',
    description: '',
    id: 0,
    type: '',
    user_id: '',
    attach: [],
    hashtag: '',
    user:{
        id:'',
        about: '',
        address: '',
        deleted_at: '',
        email: '',
        managerName: '',
        mobile: '',
        name: '',
        resume:"",
        status:0,
        type:"general",
        webLink:"",
        instagram:"",
        telegram:"",
        attach:[]
    },
    category:{
        id:"",
        name:"",
        name_en:"",
        name_ar:"",
    }
}

export const ProductDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        setProductDetailData: (state, action: { payload: ProductData }) => {

            return { ...action.payload }
        },
        emptyProductDetailData: () => {
            return initialState
        },
    }
})

export const { setProductDetailData, emptyProductDetailData } = ProductDetailSlice.actions

export default ProductDetailSlice.reducer