'use client'

import { ProfileApi, RankSetApi, RemoveMyAccountApi, UsersContactUsApi, UsersContactUsListApi, UsersEditProfileApi, UsersListApi, UsersReportApi } from "./ApiAddress"
import { UserDataRegister, UsersSearchProps } from "@/app/interface/Entity";

import API from "../Api"
import { ConvertToQueryString } from "@/utility/Function";

export const GetMyProfile=(callBack:Function)=>{

   
    API.get(ProfileApi,{ headers: {
        Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
          }}).then((res:any)=>{
        callBack(res);
       
    })
    .catch(()=>{
        callBack(false)
    })

}

export const SetRank=(id:string,callBack:Function)=>{

   
    API.post(RankSetApi,{rank_id:id},{ headers: {
        Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
          }}).then((res:any)=>{
        callBack(res);
       
    })
    .catch(()=>{
        callBack(false)
    })

}
export const EditProfile=(param:UserDataRegister,callBack:Function)=>{

    API.post(UsersEditProfileApi, param, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
      }
    ).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })

    

}

export const GetUsers = (page:string,param: UsersSearchProps, callBack: Function) => {
    let url=UsersListApi+`?page=${page}`;
    let keys=Object.keys(param);
    if(keys.length>0){
        url=url+`&${ConvertToQueryString(param,true)}`;
    }
    API.get(url).then((res: any) => {
        callBack(res)
    }).catch(() => {
            callBack(false)
        })
}
export const GetUsersWithoutPage = (param: UsersSearchProps, callBack: Function) => {
    let url=UsersListApi;
    let keys=Object.keys(param);
    if(keys.length>0){
        url=url+`?${ConvertToQueryString(param,true)}`;
    }
    API.get(url).then((res: any) => {
        callBack(res)
    }).catch(() => {
            callBack(false)
        })
}


export const SendContactUs=(param:{txt:string},callBack:Function)=>{

    API.post(UsersContactUsApi, param, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
      }
    ).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })

    

}

export const GetUserContactUsList = ( callBack: Function) => {
    let url=UsersContactUsListApi;
  
    API.get(url,{ headers: {
        Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
          }}).then((res: any) => {
        callBack(res)
    }).catch(() => {
            callBack(false)
        })
}


export const SendReport=(param:{txt:string},callBack:Function)=>{

    API.post(UsersReportApi, param, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
      }
    ).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })

    

}

export const removeMyAccount=(callBack:Function)=>{

    API.delete(RemoveMyAccountApi,{
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
      }
    ).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })

    

}

