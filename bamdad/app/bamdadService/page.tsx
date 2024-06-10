import { BamdadServiceApi } from '../redux/ApiCall/ApiAddress';
import LayoutMobile from '@/app/components/layout/LayoutMobile';
import React from 'react'
import Services from '@/app/components/bamdad/Services';
import { baseURL } from '@/utility/Config';

export default async function page() {

    const res = await fetch(baseURL + BamdadServiceApi, { cache: 'no-store' });
    const ServicesData = await res.json()

  return (
    <LayoutMobile>
        <Services services={ServicesData.data} />
        
    </LayoutMobile>
  )
}
