import { UsersApi, UsersProductListApi } from '@/app/redux/ApiCall/ApiAddress';

import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import Products from '@/app/components/business/detail/product'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({params}:{params:{userId:string}}) {

   const res=await fetch(baseURL+UsersApi+`/${params.userId}`, { cache: 'no-store',next:{revalidate:5} });
   const DataDetail = await res.json()
   const res2=await fetch(baseURL+UsersProductListApi+`/${params.userId}`, { cache: 'no-store',next:{revalidate:5} });
   const DataDetail2 = await res2.json()

  return (
     <LayoutMobileInnerPage urlBack='/business' type='more'>
        <Products 
        userDatas={DataDetail.data}
         productsData={DataDetail2.data.data} 
         haveAction={false}
         current_page={DataDetail2.data.current_page}
         to={DataDetail2.data.to}
         total={DataDetail2.data.total}
         ranks={[]}
         />       
     </LayoutMobileInnerPage>
  )
}

