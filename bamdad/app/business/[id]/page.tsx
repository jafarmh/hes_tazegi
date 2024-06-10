import { UsersApi, UsersListApi } from '@/app/redux/ApiCall/ApiAddress';

import BusinessDetail from '@/app/components/business/detail'
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({params}: {params: { id: string }}) {

  const res=await fetch(baseURL+UsersApi+`/${params.id}`, { cache: 'no-store',next:{revalidate:5} });
  const DataDetail = await res.json()


  return (
    <LayoutMobileInnerPage urlBack='' type='more' reportId={params.id}>
    {/* <LayoutMobileInnerPage urlBack='/business' type='more' reportId={params.id}> */}
        <BusinessDetail  data={DataDetail.data} haveAction={false}/>
    </LayoutMobileInnerPage>
  )
}
