import { GetCategoryApi, GetCountryApi } from '../redux/ApiCall/ApiAddress';

import Filter from '../components/search/Filter'
import LayoutMobile from '../components/layout/LayoutMobile'
import LayoutMobileInnerPage from '../components/layout/LayoutMobileInnerPage'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page() {
  const res=await fetch(baseURL+GetCategoryApi+'?parent_id=0', { });
  const Category = await res.json()

  const resCountry=await fetch(baseURL+GetCountryApi);
  const Country = await resCountry.json()

  return (
    <LayoutMobileInnerPage urlBack='' type='backGeneral'>
      <Filter category={Category.data} country={Country.data}/>
    </LayoutMobileInnerPage>
  )
}
