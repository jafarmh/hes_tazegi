import { RankApi, SiteInfoSetApi } from '@/app/redux/ApiCall/ApiAddress';

import LayoutMobileProfile from '@/app/components/layout/LayoutMobileProfile'
import Products from '@/app/components/business/detail/product'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page() {
  const resInfo = await fetch(baseURL + SiteInfoSetApi, { cache: 'no-store' });
  const SiteInfo = await resInfo.json()

  const res = await fetch(baseURL + RankApi, { cache: 'no-store' });
  const Ranks = await res.json()

  return (
    <LayoutMobileProfile HaveAction>
      <Products
      ranks={Ranks.data}
        SiteInfo={SiteInfo.data?.site_info}
        current_page=''
        to=''
        total=''
        userDatas={{
          about: "",
          address: "",
          attach: [],
          email: "",
          id: "",
          deleted_at: "",
          managerName: "",
          mobile: "",
          name: "",
          resume: "",
          status: 0,
          type: "company",
          webLink: "",
          instagram: "",
          telegram: "",

        }} productsData={[]} haveAction />
    </LayoutMobileProfile>
  )
}
