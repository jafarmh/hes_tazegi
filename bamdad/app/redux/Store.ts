import Brochure from '@/app/redux/reducer/user/Brochure'
import BrochureDetail from '@/app/redux/reducer/user/BrochureDetail'
import CategorySelectedValue from '@/app/redux/reducer/general/CategorySelectedValue'
import CountrySelectedValue from '@/app/redux/reducer/general/CountrySelectedValue'
import ExhibitionData from '@/app/redux/reducer/general/Exhibition'
import ExportSolutionData from '@/app/redux/reducer/general/ExportSolution'
import Product from '@/app/redux/reducer/user/Product'
import ProductDetail from '@/app/redux/reducer/user/ProductDetail'
import Ranks from '@/app/redux/reducer/general/Ranks'
import RegisterReducer from '@/app/redux/reducer/user/Register'
import Search from '@/app/redux/reducer/general/Search'
import Service from '@/app/redux/reducer/user/Services'
import SiteInfoReducer from '@/app/redux/reducer/general/SiteInfo'
import UserData from '@/app/redux/reducer/user'
import UserList from '@/app/redux/reducer/user/UserList'
import categoryReducer from '@/app/redux/reducer/general/Category'
import { configureStore } from '@reduxjs/toolkit'
import countryReducer from '@/app/redux/reducer/general/Country'
import otpReducer from '@/app/redux/reducer/Otp'
import profileReducer from '@/app/redux/reducer/user/Profile'

export const store = configureStore({
  reducer: {
    otp: otpReducer,
    userOnline:UserData,
    categoryDatas:categoryReducer,
    countryDatas:countryReducer,
    RegisterParam:RegisterReducer,
    profile:profileReducer,
    Brochure,
    Product,
    Service,
    ExportSolutionData,
    ExhibitionData,
    ProductDetail,
    BrochureDetail,
    Search,
    CategorySelectedValue,
    CountrySelectedValue,
    UserList,
    Ranks,
    SiteInfoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch