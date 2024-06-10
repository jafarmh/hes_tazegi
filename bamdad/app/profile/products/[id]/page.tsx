import Detail from '@/app/components/business/detail/product/Detail'
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import { ProductGetMyListApi } from '@/app/redux/ApiCall/ApiAddress';
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({params}: {params: { id: string }}) {
    const res=await fetch(baseURL+ProductGetMyListApi+`/${params.id}`, { cache: 'no-store' });
    const DataDetail = await res.json()
  
    return (
        <LayoutMobileInnerPage urlBack='/profile/products' >
            <Detail data={DataDetail.data}/>

        </LayoutMobileInnerPage>
    )
}
