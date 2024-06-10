import API from "../Api"
import { ExhibitionApi } from "./ApiAddress"

export const GetExhibitionApiList=(callBack:Function)=>{
    API.get(ExhibitionApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })
}

export const GetExhibitionListPage=(page:string,callBack:Function)=>{
    API.get(ExhibitionApi+`?page=${page}`).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })
}