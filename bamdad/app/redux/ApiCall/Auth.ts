import API from '@/app/redux/Api'
import { UserDataRegister } from '@/app/interface/Entity'

export const SendOtp=(mobile:string,callBack:Function)=>{
    API.post("users/send/otp",{
        mobile
    }).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}

export const Login=(mobile:string,code:string,callBack:Function)=>{

    API.post("users/login",{mobile,code}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}
export const Register=(param:UserDataRegister,callBack:Function)=>{

    API.post("users/register",param).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}

