import { UsersDataProps } from "@/app/interface/Entity"
import { createSlice } from "@reduxjs/toolkit"

const initialState: UsersDataProps[] = []


export const UserListSlice = createSlice({
    name: 'UserList',
    initialState,
    reducers: {
        setUserListData: (state, action: { payload: UsersDataProps[] }) => {

            return [ ...state, ...action.payload ]
        },
        emptyUserListData: (state) => {
            state=[]
            return state
        },
    }
})

export const { setUserListData, emptyUserListData } = UserListSlice.actions

export default UserListSlice.reducer