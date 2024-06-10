import DetailNews from '../../components/exportSolution/DetailNews'
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import React from 'react'
import { baseURL } from '@/utility/Config';
import { exportSolutionApi } from '@/app/redux/ApiCall/ApiAddress';

export default async function page({params}: {params: { id: string }}) {

     const res=await fetch(baseURL+exportSolutionApi+`/${params.id}`, { cache: 'no-store' });
     const ExportSolutionDetail = await res.json()
    
    return (
        <div>
            <LayoutMobileInnerPage urlBack='' type='more'>
            {/* <LayoutMobileInnerPage urlBack='/exportSolution' type='more'> */}
             <DetailNews data={ExportSolutionDetail.data}/>
            </LayoutMobileInnerPage>
        </div>
    )
}
