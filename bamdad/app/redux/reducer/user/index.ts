import { createSlice } from "@reduxjs/toolkit"

interface UserData {
    about: null | string,
    address: string,
    deleted_at: null | string,
    email: string,
    email_verified_at: null | string,
    id: number,
    managerName: string,
    mobile: string,
    name: string,
    resume: null | string,
    status: 0 | 1,
    type: "general" | "company",
    webLink: null | string
}

const initialState: UserData = {
    about: null,
    address: "",
    deleted_at: null,
    email: "",
    email_verified_at: null,
    id: 1,
    managerName: "",
    mobile: "",
    name: "",
    resume: null,
    status: 0,
    type: "general",
    webLink: null
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: { payload: UserData }) => {

            return { ...state, ...action.payload }
        },
        emptyUserData: () => {
            return initialState
        },
    }
})

export const { setUserData, emptyUserData } = UserSlice.actions

export default UserSlice.reducer