import DetailExhibition from '@/app/components/exhibition/Detail';
import { ExhibitionApi } from '@/app/redux/ApiCall/ApiAddress';
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({params}: {params: { id: string }}) {

     const res=await fetch(baseURL+ExhibitionApi+`/${params.id}`, { cache: 'no-store',next:{revalidate:10} });
     const Datas = await res.json()
  
    return (
        <div>
            <LayoutMobileInnerPage urlBack='/exhibition' type='more'>
             <DetailExhibition data={Datas.data}/>
            </LayoutMobileInnerPage>
        </div>
    )
}
