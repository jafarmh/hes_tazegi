import { AddCommentSolutionApi, AddLikeSolutionApi, exportSolutionApi } from "./ApiAddress"
import { CommentParamProps, LikeParamProps } from "@/app/interface/Entity"

import API from "../Api"
import { ConvertToQueryString } from "@/utility/Function"

export const GetExportSolutionList=(param:{title:string},callBack:Function)=>{
    API.get(exportSolutionApi+`?${ConvertToQueryString(param,true)}`).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })
}

export const GetExportSolutionListPage=(page:string,callBack:Function)=>{
    API.get(exportSolutionApi+`?page=${page}`).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })
}

export const AddNewComment = (param: CommentParamProps, callBack: Function) => {

    API.post(AddCommentSolutionApi, param, {
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


export const AddNewLike = (param: LikeParamProps, callBack: Function) => {
    API.post(AddLikeSolutionApi, param, {
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
