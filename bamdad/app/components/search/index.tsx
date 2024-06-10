'use client'

import { BrochureData, ExportSolutionProps, ProductData, UsersDataProps } from '@/app/interface/Entity'
import React, { useEffect } from 'react'
import SearchBlueButton, { SearchLinkFilter } from '../elements/search/SearchBlueButton'
import { setProduct, setService, setSolution, setUser } from '@/app/redux/reducer/general/Search'
import { useDispatch, useSelector } from 'react-redux'

import BrochuresList from './Brochures'
import ExportSolutionListSwipe from './ExportSolutionListSwipe'
import Hashtags from '../elements/search/Hashtags'
import Link from 'next/link'
import Products from './Products'
import RectangleSearch from '../../../asset/img/RectangleSearch.png'
import { RootState } from '@/app/redux/Store'
import ServicesList from './Services'
import UsersList from './UsersList'
import WriterName from '../home/WriterName'
import { getImageProf } from '@/utility/Function'
import { useTranslation } from 'react-i18next'

export default ({ ExportSolutionList, products, Brochures,Services ,Users}: {
    ExportSolutionList: ExportSolutionProps[],
    products: ProductData[],
    Services: ProductData[],
    Users: UsersDataProps[],
    Brochures: BrochureData[]
}) => {
    const productData=useSelector((state:RootState)=>state.Search.product);
    const serviceData=useSelector((state:RootState)=>state.Search.services);
    const brochureData=useSelector((state:RootState)=>state.Search.brochure);
    const ExportSData=useSelector((state:RootState)=>state.Search.solutions);
    const UserData=useSelector((state:RootState)=>state.Search.users);
    const dispatch=useDispatch();
    const {t}=useTranslation();
    
    useEffect(()=>{
        
        if(products &&productData.length<=0){
            dispatch(setProduct(products));
        }
        if(Brochures&&brochureData.length<=0){
            dispatch(setSolution(ExportSolutionList));
        }
        if(ExportSolutionList&&ExportSData.length<=0){
            dispatch(setSolution(ExportSolutionList));
        }
        if(Services&&serviceData.length<=0){
            dispatch(setService(Services));
        }
        if(Users&&UserData.length<=0){
            dispatch(setUser(Users));
        }
    },[])

    return (
        <>
            <div className='mt-4'>
            <SearchLinkFilter />
            </div>

            {/* <div className="flex flex-row">
                <div className='flex-grow'><b>برچسب های محبوب</b></div>
                <div className='flex-none text-[var(--blueColor)]'><span>مشاهده همه</span></div>
            </div>
            <div className="flex flex-row flex-wrap gap-4 my-4">
                <Hashtags text='FridayMorning' />
                <Hashtags text='محصولات' />
                <Hashtags text='محصولات_صادراتی' />
                <Hashtags text='Bitcoin' />
                <Hashtags text='Cryptocurrency' />
                <Hashtags text='DigitalCurrency' />
                <Hashtags text='knifeTalk' />
                <Hashtags text='صادراتی' />
            </div> */}
            <div className="flex flex-row mb-2">
                <div className='flex-grow'><b className='text-[var(--black)]' >{t("endSolution")}</b></div>
                <div className='flex-none text-[var(--blueColor)]'><Link href={"/exportSolution"}><span>{t("viewAll")}</span></Link></div>
            </div>
            <ExportSolutionListSwipe ExportSolutionList={ExportSolutionList} />
            {/* <div className="flex snap-x snap-mandatory gap-x-2 w-full mx:auto flex-row  overflow-x-scroll overflow-y-hidden">
                {ExportSolutionList.map((item) => (
               
                    <div className="snap-center shrink-0 flex flex-col gap-y-2  ">
                        <Link href={"/exportSolution/" + item.id}><img className='w-full h-40 rounded-2xl object-cover' src={getImageProf(item.attach)?.path} /> </Link>
                        <div><b className='text-sm'>{item.title}:{item.description.substring(0, 20)}...</b></div>
                        <WriterName
                            data={item.expert}
                        />
                    </div>
                ))}


            </div> */}
            <Products   />
            <ServicesList   />
            <BrochuresList />
            <UsersList />

        </>
    )
}
