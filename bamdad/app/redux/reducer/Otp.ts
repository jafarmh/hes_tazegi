import { createSlice } from '@reduxjs/toolkit'

export interface OtpState {
  mobile: string,
  code: string
}

const initialState: OtpState = {
  mobile: '',
  code: '',
}

export const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtpCode: (state, action:{payload:OtpState}) => {

      return { ...state, ...action.payload }
    },
    emptyOtpCode: (state) => {
      return {
        mobile: '',
        code: ''
      }
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setOtpCode, emptyOtpCode } = otpSlice.actions

export default otpSlice.reducer