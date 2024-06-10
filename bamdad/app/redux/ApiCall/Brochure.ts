import { BrochureAllApi, BrochureApi, BrochureGetMyListApi, ProfileApi, UsersBrochureAddFileApi, UsersBrochureListApi, UsersBrochureRemoveFileApi } from "./ApiAddress"
import { BrochureData, BrochureSearch } from "@/app/interface/Entity"

import API from "../Api"
import { ConvertToQueryString } from "@/utility/Function"

export const AddNewB=(param:BrochureData,callBack:Function)=>{
    API.post(BrochureApi, param, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
      }
    ).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })
}

export const EditP= (id:any,param: BrochureData, callBack: Function) => {
    
    let newP:any=param;
     delete (newP['id']);
    API.put(BrochureApi+`/${id}?${ConvertToQueryString(newP,true)}`, newP, {
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

export const AddNewFileB = (id:string,param: any, callBack: Function) => {

    API.post(UsersBrochureAddFileApi+`/${id}`, param, {
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

export const RemoveFileB = (id:string,attachId: string, callBack: Function) => {

    API.delete(UsersBrochureRemoveFileApi+`/${id}/${attachId}`, {
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
export const GetMuListB=(page='1',callBack:Function)=>{
    API.get(BrochureGetMyListApi+`?page=${page}`,{
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
              }
    }).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })
}

export const GeUserListBrochure = (id:string,page='1',callBack: Function) => {
    API.get(UsersBrochureListApi+`/${id}?page=${page}`, {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
    }).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}

export const GetBrochureDetail = (id:string,callBack: Function) => {
    API.get(BrochureApi+'/'+id, {}).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}

export const RemoveBrochure = (id:string,callBack: Function) => {
    API.delete(BrochureApi+'/'+id,{
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("0VbQvSw1sB")}`,
        }
      }).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}

export const GetBrochures = (param: BrochureSearch, callBack: Function) => {
    
    API.get(BrochureAllApi+`?${ConvertToQueryString(param,true)}`).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}