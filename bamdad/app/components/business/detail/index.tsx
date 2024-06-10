'use client'

import { HeaderBusinessMobilePageProps, HeaderBusinessMobileProps } from '@/app/interface/Headers';
import React,{useEffect, useState} from 'react'
import { emptyDataSiteInfo, setDataSiteInfo } from '@/app/redux/reducer/general/SiteInfo';

import About from './About';
import { GetMyProfile } from '@/app/redux/ApiCall/User';
import Header from './Header';
import TabsBlueLine from '../../elements/tabs/TabsBlueLine';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function BusinessDetail({data,haveAction,SiteInfo}:HeaderBusinessMobilePageProps) {
    const {t}=useTranslation();
    const dispatch=useDispatch();
 
    useEffect(()=>{
        if(SiteInfo!==undefined){
            dispatch(emptyDataSiteInfo())
            dispatch(setDataSiteInfo(SiteInfo))
        }

    },[SiteInfo])

    return (
        <>
            <div  className="flex flex-col">
             
                <Header  data={data} haveAction={haveAction}/>


                <TabsBlueLine items={[
                    { active: true, link: "#", title: t('contactUs') },
                    { active: false, link: haveAction?"/profile/services":"/business/services/"+data.id, title:t('services') },
                    { active: false, link: haveAction?"/profile/products":"/business/products/"+data.id, title:t('products') },
                    { active: false, link: haveAction?"/profile/brochure":"/business/brochure/"+data.id, title: t('brochure') },
                ]} />
                <About data={data} haveAction={haveAction}/>
            </div>

        </>
    )
}
