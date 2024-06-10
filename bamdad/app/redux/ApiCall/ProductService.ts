import { BrochureData, ProductData, ProductDataSearch } from "@/app/interface/Entity"
import { BrochureGetMyListApi, ProductGetMyListApi, ProductSAllApi, ProductSApi, ServiceGetMyListApi, UsersProductListApi, UsersProductServiceAddFileApi, UsersProductServiceRemoveFileApi, UsersServiceListApi } from "./ApiAddress"

import API from "../Api"
import {ConvertToQueryString} from '@/utility/Function'

export const AddNewPS = (param: ProductData, callBack: Function,type:"service"|"product") => {

    API.post(type==="product"?ProductSApi:ServiceGetMyListApi, param, {
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

export const EditPS = (id:any,param: ProductData, callBack: Function) => {
    
    let newP:any=param;
     delete (newP['id']);
    API.put(ProductSApi+`/${id}?${ConvertToQueryString(newP,true)}`, newP, {
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
 
export const AddNewFilePS = (id:string,param: any, callBack: Function) => {

    API.post(UsersProductServiceAddFileApi+`/${id}`, param, {
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

export const GetMyListProduct = (page='1',callBack: Function) => {
    API.get(ProductGetMyListApi+`?page=${page}`, {
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
export const RemoveFilePS = (id:string,attachId: string, callBack: Function) => {

    API.delete(UsersProductServiceRemoveFileApi+`/${id}/${attachId}`, {
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
export const GetMyListService = (page='1',callBack: Function) => {
    API.get(ServiceGetMyListApi+`?page=${page}`, {
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


export const GetProductDetail = (id:string,callBack: Function) => {
    API.get(ProductGetMyListApi+'/'+id, {}).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}

export const GetServiceDetail = (id:string,callBack: Function) => {
    API.get(ServiceGetMyListApi+'/'+id, {}).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}
export const GeUserListService = (id:string,page='1',callBack: Function) => {
    API.get(UsersServiceListApi+`/${id}?page=${page}`, {
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

export const GeUserListProduct = (id:string,page='1',callBack: Function) => {
    API.get(UsersProductListApi+`/${id}?page=${page}`, {
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
export const RemoveProduct = (id:string,callBack: Function) => {
    API.delete(ProductGetMyListApi+'/'+id,{
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

export const GetProducts = (param: ProductDataSearch, callBack: Function) => {
    
    API.get(ProductSAllApi+`?${ConvertToQueryString(param,true)}`).then((res: any) => {
        callBack(res)
    })
        .catch(() => {
            callBack(false)
        })
}

export const RemoveService = (id:string,callBack: Function) => {
    API.delete(ServiceGetMyListApi+'/'+id,{
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

