import { AboutApi, FaqApi, PrivaciesApi, RankApi, SiteInfoSetApi, TermApi } from './ApiAddress';
import { GetCategoryApi, GetCountryApi } from '@/app/redux/ApiCall/ApiAddress'

import API from '@/app/redux/Api'

export const GetCategory=(parent:string,callBack:Function)=>{
    API.get(GetCategoryApi+`?parent_id=${parent}`,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}
export const GetRanks=(callBack:Function)=>{
    API.get(RankApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}

export const GetCountry=(callBack:Function)=>{
    API.get(GetCountryApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}



export const GetAbout=(callBack:Function)=>{
    API.get(AboutApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}


export const GetTerm=(callBack:Function)=>{
    API.get(TermApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}


export const GetFaq=(callBack:Function)=>{
    API.get(FaqApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}


export const GetPrivacies=(callBack:Function)=>{
    API.get(PrivaciesApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}


export const GetSiteInfo=(callBack:Function)=>{
    API.get(SiteInfoSetApi,{}).then((res:any)=>{
        callBack(res)
    })
    .catch(()=>{
        callBack(false)
    })

}