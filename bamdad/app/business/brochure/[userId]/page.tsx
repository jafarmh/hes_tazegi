import { UsersApi, UsersBrochureListApi } from '@/app/redux/ApiCall/ApiAddress';

import Brochure from '@/app/components/business/detail/brochure'
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page({ params }: { params: { userId: string } }) {
  const res = await fetch(baseURL + UsersApi + `/${params.userId}`, { cache: 'no-store', next: { revalidate: 5 } });
  const DataDetail = await res.json()
  const res2 = await fetch(baseURL + UsersBrochureListApi + `/${params.userId}`, { cache: 'no-store', next: { revalidate: 5 } });
  const DataDetail2 = await res2.json()
  return (
    <LayoutMobileInnerPage urlBack='/business' type='more'>
      <Brochure
        brochureData={DataDetail2.data.data}
        userDatas={DataDetail.data}
        haveAction={false}
        current_page={DataDetail2.data.current_page}
        to={DataDetail2.data.to}
        total={DataDetail2.data.total}
        ranks={[]}
      />
    </LayoutMobileInnerPage>
  )
}
