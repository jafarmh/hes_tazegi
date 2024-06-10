import Exhibition from '../components/exhibition';
import { ExhibitionApi } from '../redux/ApiCall/ApiAddress';
import LayoutMobile from '../components/layout/LayoutMobile'
import React from 'react'
import { baseURL } from '@/utility/Config';

export default async function page() {

    const res=await fetch(baseURL+ExhibitionApi, { cache: 'no-store' });
    const ExhibitionList = await res.json()
   
 
   
    return (
        <>
            <LayoutMobile>
               
                <Exhibition 
                data={ExhibitionList.data.data}
                current_page={ExhibitionList.data.current_page}
                to={ExhibitionList.data.to}
                total={ExhibitionList.data.total}
                />
                
               
            </LayoutMobile>
        </>
    )
}
