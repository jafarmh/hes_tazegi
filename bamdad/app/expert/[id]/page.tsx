import { ExpertDetailApi } from '@/app/redux/ApiCall/ApiAddress';
import LayoutMobile from '../../components/layout/LayoutMobile'
import LayoutMobileInnerPage from '../../components/layout/LayoutMobileInnerPage'
import ProfileExpert from '../../components/expert/profile'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({params}: {params: { id: string }}) {
    
    const res=await fetch(baseURL+ExpertDetailApi+`/${params.id}`, { cache: 'no-store' });
    const Datas = await res.json()
    return (
        <LayoutMobileInnerPage urlBack='' type='more'>
            <ProfileExpert data={Datas.data}/>
            
        </LayoutMobileInnerPage>
    )
}
