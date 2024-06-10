import { Paginate } from "./Headers"

export interface AttachProps {
    id: string,
    path: string,
    name: string,
    type: string,

}
export interface CategoryProps {
    id: string,
    name: string,
    name_en: string,
    name_ar: string,

}
export interface CategoryUserProps extends CategoryProps {

    pivot: {
        user_id: string,
        category_id: string
    }
}

export interface CountryProps {
    id: string,
    code: string,
    name: string,
    name_en: string,
    name_fr: string,
    phone: string,
}
export interface CountriesUserProps extends CountryProps {

    pivot: {
        user_id: string,
        country_id: string
    }
}

export interface UserDataRegister {
    about: null | string,
    address: string,
    email: string,

    managerName: string,
    mobile: string,
    name: string,
    resume: null | string,
    status: 0 | 1,
    type: "general" | "company",
    webLink: null | string,
    categories?: any[],
    countries?: any[],
    image?: File,
    resumeF?: File,
    code?:string,

}

export interface UsersDataProps {
    id:string,
    about: string,
    address: string,
    deleted_at: string,
    email: string,
    managerName: string,
    mobile: string,
    name: string,
    resume: string,
    status: 0 | 1,
    type: "general" | "company",
    webLink: string,
    instagram:string,
    telegram:string,
    categories?: any[],
    countries?: any[],
    attach: AttachProps[],


}
export interface UsersSearchProps {
    id?:string,
    about?: string,
    address?: string,
    email?: string,
    managerName?: string,
    mobile?: string,
    name?: string,
    status?: 0 | 1,
    type?: "general" | "company",
}
export interface UsersGeneralDataProps extends UsersDataProps {
    id: string, 

}

export interface BrochureData {
    title: null | string,
    description: string,
    id: number,
    user_id: string,
    attach: AttachProps[],
    user:UsersGeneralDataProps,

}


export interface BrochureSearch {
    title?:string,
    description?: string,
    id?: string,
    user_id?: string,

}
export interface TagProps {
    id: string,
    name: string
  
}
export interface ProductData {
    title: null | string,
    price: string,
    description: string,
    id: number,
    type: string,
    user_id: string,
    attach: AttachProps[],
    hashtag?: string
    tags?: TagProps[],
    user:UsersGeneralDataProps,
    category:CategoryProps

}
export interface ProductDataSearch {
    title?:string,
    price?: string,
    description?: string,
    id?: number,
    type: string,
    user_id?: string,
    hashtag?: string
 
}

export interface ProfileData {
    about:  string,
    address: string,
    email: string,
    id: number,
    managerName: string,
    mobile: string,
    name: string,
    resume:  string,
    status: 0 | 1,
    type: "general" | "company",
    webLink:  string,
    instagram:  string,
    telegram:  string,
    attach: AttachProps[],
    categories: CategoryUserProps[],
    countries: CountriesUserProps[],
    rank:RanksDataProps
}

export interface ExpertProps {
    id: string,
    name: string,
    email: string,
    mobile: string,
    about: string,
    webLink: string,
    attach: AttachProps[],

}

export interface ExportSolutionProps {
    id: string,
    title: string,
    description: string,
    name_fr: string,
    attach: AttachProps[],
    expert: ExpertProps,
    country: CountryProps,
    category: CategoryProps,
    comment:CommentsProps[],
}


export interface ExportSolutionPageProps extends Paginate {
    data:ExportSolutionProps[]
}

export interface ExhibitionProps {
    id: string,
    title: string,
    description: string,
    status: number,
    attach: AttachProps[],
    expert: ExpertProps,
    start_at: string,
    end_at: string,
}
export interface ExhibitionPageProps extends Paginate {
    data:ExhibitionProps[],

}
export interface CommentsProps{
    id: number,
        "text": string,
        "user_id": 2,
        "rate":string,
        "user": UsersGeneralDataProps
}

export interface CommentParamProps{
    id: number,
        "text": string,
        "exp_id": string,
        "rate":string,
 }

 export interface LikeParamProps{

        "type": "like"|"dislike",
        "exp_id": string,
  }

export interface ServicesData {
    title: null | string,
    price: string,
    description: string,
    id: number,
    type: string,
    user_id: string,
    attach:AttachProps[],
    user:UsersGeneralDataProps,
    category:CategoryProps
}

export interface RanksDataProps{
    id:string,
    name:string,
    description:string,
    color:string,
    price:number,
}


export interface SiteInfoProps{
    phone:string,
    email:string,
    instagram:string,
    telegram:string,
    link:string,
    about_us:string,
    fund:string,
    loginInfo:string
 
}

export interface serviceBamdadProps
{
    id: number,
    title: string,
    link:string,
    attach:AttachProps[],
    description:string
}