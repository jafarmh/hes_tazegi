import { BrochureGetMyListApi, UsersApi } from '@/app/redux/ApiCall/ApiAddress';

import DetailB from '@/app/components/business/detail/brochure/DetailB';
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage';
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({ params }: { params: { userId: string, id: string } }) {

    const res = await fetch(baseURL + UsersApi + `/${params.userId}`, { cache: 'no-store' });
    const DataDetail = await res.json()

    const res2 = await fetch(baseURL + BrochureGetMyListApi + `/${params.id}`, { cache: 'no-store' });
    const DataDetail2 = await res2.json()


    return (
        <LayoutMobileInnerPage urlBack='' type='more'>
        {/* <LayoutMobileInnerPage urlBack={'/business/brochure/' + params.userId} type='more'> */}
            <DetailB userDatas={DataDetail.data} data={DataDetail2.data} />
        </LayoutMobileInnerPage>
    )
}
