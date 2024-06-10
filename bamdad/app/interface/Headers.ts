import { BrochureData, ProductData, RanksDataProps, SiteInfoProps, UsersDataProps } from "./Entity";

export interface Paginate{
  total:string,
  current_page:string,
  to:string
}

export interface HeaderMobileInnerProps{
    urlBack:string,
  }

  export interface HeaderMobileMoreProps{
    urlBack:string,
    reportId:string
  }

  export interface HeaderBusinessMobileProps{
    haveAction:boolean,
    
  }
  export interface HeaderBusinessMobilePageProps{
    haveAction:boolean,
    data:UsersDataProps,
   // ranks:RanksDataProps[],
    SiteInfo?:SiteInfoProps
  }

  export interface HeaderBusinessMobileServiceProps extends Paginate{
    haveAction:boolean,
    userDatas:UsersDataProps,
    serviceData:ProductData[],
    SiteInfo?:SiteInfoProps,
    ranks:RanksDataProps[]

  }

  export interface HeaderBusinessMobileProductProps extends Paginate{
    haveAction:boolean,
    userDatas:UsersDataProps,
    productsData:ProductData[],
    SiteInfo?:SiteInfoProps,
    ranks:RanksDataProps[]

  }

  export interface HeaderBrochureMobileProductProps extends Paginate{
    haveAction:boolean,
    userDatas:UsersDataProps,
    brochureData:BrochureData[],
    SiteInfo?:SiteInfoProps,
    ranks:RanksDataProps[]

  }
  export interface HeaderBusinessProps extends Paginate{
    listData:UsersDataProps[],

  }