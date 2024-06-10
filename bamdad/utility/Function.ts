import { AttachProps } from "@/app/interface/Entity"

export const ConvertToQueryString = (body: any, notNull = false) => {
    let str = "";
    for (var key in body) {
        if (notNull) {
            if (body[key] === '' || body[key] === null || body[key] === 'null')
                continue;
        }
        if (str !== "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(body[key]);
    }
    return str;
}


export const getImageProf = (data: AttachProps[]) => {
    let item=data.find((item) => item.type === "image")
    if(item?.path==='')
    return undefined;
    return item
}

export const getVideoProf = (data: AttachProps[]) => {
    let item=data.find((item) => item.type === "video")
    if(item?.path==='')
    return undefined;
    return item
}

export const getFileProf = (data: AttachProps[]) => {
    return data.find((item) => item.type === "file")
}

export const CheckLogged=()=>window.localStorage.getItem("0VbQvSw1sB")!==null;

export const  Pluck=(array:any[], key:string)=> {
    return array.map(o => o[key]);
  }