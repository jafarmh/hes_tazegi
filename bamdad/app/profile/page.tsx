import { RankApi, SiteInfoSetApi } from '../redux/ApiCall/ApiAddress';

import BusinessDetail from '../components/business/detail'
import LayoutMobile from '../components/layout/LayoutMobile'
import LayoutMobileProfile from '../components/layout/LayoutMobileProfile'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page() {
    const res = await fetch(baseURL + RankApi, { cache: 'no-store' });
    //const Ranks = await res.json()

    const resInfo = await fetch(baseURL + SiteInfoSetApi, { cache: 'no-store' });
    const SiteInfo = await resInfo.json()

    
    return (

        <LayoutMobileProfile HaveAction >
            <BusinessDetail haveAction
               // ranks={Ranks.data}
                data={{
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
                    telegram: "",
                    instagram: "",

                }}
                
                SiteInfo={SiteInfo.data?.site_info}/>
        </LayoutMobileProfile>
    )
}
