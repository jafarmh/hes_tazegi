'use client'

import { DisableBtnLoadingBlueDark, DisableBtnLoadingBlueDarkMore } from '@/app/components/elements/button/Btns'
import { GeUserListService, GetMyListService, GetProductDetail, RemoveService } from '@/app/redux/ApiCall/ProductService'
import { HeaderBusinessMobileProps, HeaderBusinessMobileServiceProps } from '@/app/interface/Headers'
import React, { useEffect, useState } from 'react'
import { emptyDataSiteInfo, setDataSiteInfo } from '@/app/redux/reducer/general/SiteInfo'
import { emptyServicesMeData, setServicesMeData } from '@/app/redux/reducer/user/Services'
import { useDispatch, useSelector } from 'react-redux'

import ActionsBusinessDrawer from '@/app/components/elements/drawer/business/ActionsBusinessDrawer'
import EditProductBusinessDrawer from '@/app/components/elements/drawer/business/EditProductBusinessDrawer'
import Header from '../Header'
import Link from 'next/link'
import More from '@/asset/img/more.png';
import MoreBtn from '../../MoreBtn'
import { ProductData } from '@/app/interface/Entity'
import Rectangle8_01 from '@/asset/img/empty.jpg'
import { RootState } from '@/app/redux/Store'
import TabsBlueLine from '@/app/components/elements/tabs/TabsBlueLine'
import WriterName from '@/app/components/home/WriterName'
import { getImageProf } from '@/utility/Function'
import { setProductDetailData } from '@/app/redux/reducer/user/ProductDetail'
import { useTranslation } from 'react-i18next'

export default function Services(props: HeaderBusinessMobileServiceProps) {
    const { haveAction, serviceData, userDatas,ranks, current_page, to, total,SiteInfo } = props
    const MyData = useSelector((state: RootState) => state.Service);
    const [openAction, setOpenAction] = useState(false);
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [page, setPage] = useState(+current_page??1);
    const [haveMore, setHaveMore] = useState(false);
    const [length, setLength] = useState(to??0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const {t}=useTranslation();
    const [dataSelected, setDataSelected] = useState<ProductData>();
    const dispatch = useDispatch()
    const GetData = (pageNumber:number=page) => {
        setDisabled(true)
        setLoading(true)
        if(haveAction){
            GetMyListService(pageNumber.toString(), (res: any) => {
                setDisabled(false)
                setLoading(false)
                if (res) {
                    if(pageNumber===0){
                        dispatch(emptyServicesMeData());
                    }
                    dispatch(setServicesMeData(res.data));
                    setPage(+res.current_page);
                    setLength(res.to);
                    if ((+res.total) - (res.to) > 0) {
                        setHaveMore(true);
                    } else {
                        setHaveMore(false);
                    }
                }
            })
        }else{
            
            GeUserListService(userDatas.id,pageNumber.toString(), (res: any) => {
                setDisabled(false)
                setLoading(false)
                if (res) {
                    dispatch(setServicesMeData(res.data));
                    setPage(+res.current_page);
                    setLength(res.to);
                    if ((+res.total) - (res.to) > 0) {
                        setHaveMore(true);
                    } else {
                        setHaveMore(false);
                    }
                }
            })
        }
       
    }
    useEffect(() => {
        dispatch(emptyServicesMeData());
        if (haveAction) {
         
            GetData();
        }else{
    
            dispatch(setServicesMeData(serviceData));
        }
    }, [])

    useEffect(() => {
        if (total !== undefined && to !== undefined) {
            if (((+total) - (+to)) > 0) {
                setHaveMore(true);
                setPage((+page) )
            } else {
                setHaveMore(false);
            }
        }

    }, [])

    useEffect(()=>{
        if(SiteInfo!==undefined){
            dispatch(emptyDataSiteInfo())
            dispatch(setDataSiteInfo(SiteInfo))
        }
      
      },[SiteInfo])

    const Edit = (data: ProductData) => {
        GetProductDetail(data.id.toString(), (res: any) => {
            if (res) {
                dispatch(setProductDetailData(res));
                setOpenAddEdit(true);
                setOpenAction(false)
            }

        })
    }
    const Remove = (data: ProductData) => {
        RemoveService(data.id.toString(), () => {
            dispatch(emptyServicesMeData());
            GetData(1)
            // GetMyListService(page.toString(), (res: any) => {
            //     if (res) {
            //         dispatch(setServicesMeData(res.data));
            //     }
            // })
        })
    }

    return (
        <>
            <Header data={userDatas} haveAction={haveAction} />
    
            <TabsBlueLine items={[
                { active: false, link: haveAction ? "/profile" : "/business/" + userDatas.id, title: t('contactUs') },
                { active: true, link: "#", title: t('services')},

                { active: false, link: haveAction ? "/profile/products" : "/business/products/" + userDatas.id, title: t('products')  },
                { active: false, link: haveAction ? "/profile/brochure" : "/business/brochure/" + userDatas.id, title: t('brochure') },
            ]} />

            <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">

                {MyData.length > 0 && haveAction ? MyData.map((item) => (

                    <div className="flex flex-row p-3 items-center gap-x-4">

                        <div className="w-16">
                            <Link  href={"/profile/services/" + item.id}>
                                <img className="w-16 h-20 object-cover rounded-xl" src={ getImageProf(item.attach)?.path ?? Rectangle8_01.src} />
                            </Link>
                        </div>
                        <div className=" flex-grow flex flex-col gap-y-2">
                            <Link  href={"/profile/services/" + item.id}>
                                <div className=""><p className="font-bold">{item.title ?? ""}</p></div>
                                <div className="text-[var(--gray)] text-sm"><p>{item.description.substring(0, 30) ?? ""}...</p></div>
                                <div className="">
                                    <WriterName data={item.user} />
                                </div>
                            </Link>
                        </div>

                        <div className="  ">
                            <button onClick={() => { setDataSelected(item); setOpenAction(true) }} className=' w-10 bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] p-4 rounded-lg' >
                                <img src={More.src} alt="a" />
                            </button>
                        </div>
                    </div>

                )) : !haveAction && MyData.map((item) => (
                    <Link  href={`/business/services/${userDatas.id}/${item.id}`}>
                        <div className="flex flex-row p-3 items-center gap-x-4">

                            <div className="w-16"><img className="w-16 h-20 object-cover rounded-xl " src={item.attach.length > 0 ? getImageProf(item.attach)?.path : Rectangle8_01.src} /></div>
                            <div className=" flex flex-col gap-y-2">
                                <div className=""><p className="font-bold">{item.title}</p></div>
                                <div className="text-[var(--gray)] text-sm"><p>{item.description.substring(0, 50)}</p></div>
                                <div className="">
                                    <WriterName
                                        data={userDatas}
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                <MoreBtn 
                click={()=>{setPage(page+1);GetData(page+1)}}
                disabled={disabled} 
                loading={loading}
                haveMore={haveMore}
                />
                
            </div>
            {openAction && <ActionsBusinessDrawer
                changeOpen={(value: boolean) => setOpenAction(value)}
                isOpen={openAction}
                EditAction={Edit}
                RemoveAction={Remove}
                data={dataSelected}
            />
            }
            {openAddEdit && <EditProductBusinessDrawer
                changeOpen={(value: boolean) => setOpenAddEdit(value)}
                isOpen={openAddEdit}
                type='product'
            />
            }
        </>
    )
}
