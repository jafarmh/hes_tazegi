'use client';

import { GeUserListProduct, GetMyListProduct, GetProductDetail, RemoveProduct } from '@/app/redux/ApiCall/ProductService';
import { HeaderBusinessMobileProductProps, HeaderBusinessMobileProps } from '@/app/interface/Headers';
import React, { useEffect, useState } from 'react'
import { emptyDataSiteInfo, setDataSiteInfo } from '@/app/redux/reducer/general/SiteInfo';
import { emptyProductMeData, setProductMeData } from '@/app/redux/reducer/user/Product';
import { useDispatch, useSelector } from 'react-redux';

import ActionsBusinessDrawer from '@/app/components/elements/drawer/business/ActionsBusinessDrawer';
import EditProductBusinessDrawer from '@/app/components/elements/drawer/business/EditProductBusinessDrawer';
import Header from '../Header'
import Link from 'next/link';
import More from '@/asset/img/more.png';
import MoreBtn from '../../MoreBtn';
import { ProductData } from '@/app/interface/Entity';
import Rectangle6 from '@/asset/img/empty.jpg';
import { RootState } from '@/app/redux/Store';
import TabsBlueLine from '@/app/components/elements/tabs/TabsBlueLine'
import { getImageProf } from '@/utility/Function';
import { setProductDetailData } from '@/app/redux/reducer/user/ProductDetail';
import { useTranslation } from 'react-i18next';

export default function Products(props: HeaderBusinessMobileProductProps) {
    const { haveAction, userDatas, productsData,ranks, current_page, to, total,SiteInfo } = props
    const [openAction, setOpenAction] = useState(false);
    const [openAddEdit, setOpenAddEdit] = useState(false);
    const [dataSelected, setDataSelected] = useState<ProductData>();

    const [page, setPage] = useState(+current_page ?? 1);
    const [haveMore, setHaveMore] = useState(false);
    const [length, setLength] = useState(to ?? 0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const MyData = useSelector((state: RootState) => state.Product);
    const { t} = useTranslation();

    const dispatch = useDispatch()

    const GetData = (pageNumber: number = page) => {
        setDisabled(true)
        setLoading(true)
        if (haveAction) {
            GetMyListProduct(pageNumber.toString(), (res: any) => {
                setDisabled(false)
                setLoading(false)
                if (res) {
                    if(pageNumber===0){
                        dispatch(emptyProductMeData());
                    }
                    dispatch(setProductMeData(res.data));
                    setPage(+res.current_page);
                    setLength(res.to);
                    if ((+res.total) - (res.to) > 0) {
                        setHaveMore(true);
                    } else {
                        setHaveMore(false);
                    }
                }
            })
        } else {

            GeUserListProduct(userDatas.id, pageNumber.toString(), (res: any) => {
                setDisabled(false)
                setLoading(false)
                if (res) {
                    dispatch(setProductMeData(res.data));
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
        if (haveAction) {
            dispatch(emptyProductMeData());
            GetData();
        } else {
            dispatch(emptyProductMeData());
            dispatch(setProductMeData(productsData));
        }
    }, [])

    useEffect(() => {
        if (total !== undefined && to !== undefined) {
            if (((+total) - (+to)) > 0) {
                setHaveMore(true);
                setPage((+page))
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
        RemoveProduct(data.id.toString(), () => {
            dispatch(emptyProductMeData());
            GetData(1)
            // GetMyListProduct('1', (res: any) => {
            //     if (res) {
            //         dispatch(emptyProductMeData());
            //         dispatch(setProductMeData(res.data));
            //     }
            // })
        })
    }

    return (
        <>
            <Header  data={userDatas} haveAction={haveAction} />
      

            <TabsBlueLine items={[
                { active: false, link: haveAction ? "/profile" : "/business/" + userDatas.id, title:t('contactUs') },

                { active: false, link: haveAction ? "/profile/services" : "/business/services/" + userDatas.id, title: t('services') },
                { active: true, link: "#", title: t('products') },

                { active: false, link: haveAction ? "/profile/brochure" : "/business/brochure/" + userDatas.id, title: t('brochure') },
            ]} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mb-20">
                {/* <div className="grid grid-cols-2 gap-4 mb-20"> */}

                {MyData.length > 0 && haveAction ? MyData.map((item) => (

                    <div className="bg-[var(--grayHashtag)] rounded-lg flex-none relative flex flex-col gap-y-2 " key={item.id} >
                        <div className='relative'>
                            <img className="rounded-lg  w-[100%]  h-28 object-cover" src={getImageProf(item.attach)?.path ?? Rectangle6.src} alt="rect3" />
                            {haveAction && <div className="absolute left-4 bottom-5 w-8">
                                <button onClick={() => { setDataSelected(item); setOpenAction(true) }} className=' w-10 bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] p-4 rounded-lg' >
                                    <img src={More.src} alt="a" />
                                </button>
                                {/* <BlueLightBtn click={()=>{}} text='' icon={<img src={More.src} alt="" />} /> */}
                            </div>}
                        </div>
                        <Link href={haveAction ? "/profile/products/" + item.id : "/business/products/" + item.id}>
                            <div className='flex flex-row w-full px-1  '>
                                <div className='grow'><b className="text-[var(--gray)] text-[.7em]">{item.title}</b></div>
                                <div className='flex-none flex flex-row text-sm'>
                                    <div><b className="text-[var(--gray)] text-[.7em]">{item.price?.toLocaleString()}</b></div>
                                    <div className="rotate-180  text-[var(--gray)] text-[.7em]" style={{ writingMode: 'vertical-rl' }} >
                                        تومان
                                    </div>
                                </div>
                            </div>
                            <div className='px-1 py-2'><p className="text-[var(--gray)] text-[.7em]"> {item.description} </p></div>
                        </Link>
                    </div>


                )) :
                    !haveAction && MyData.map((item) => (
                        <div className="bg-[var(--grayHashtag)] rounded-lg flex-none relative flex flex-col gap-y-2 " key={item.id} >
                            <div className='relative'>
                                <img className="rounded-lg  w-[100%] h-auto" src={ getImageProf(item.attach)?.path?? Rectangle6.src} alt="rect3" />
                                {haveAction && <div className="absolute left-4 bottom-5 w-8">
                                    <button onClick={() => { setOpenAction(true) }} className=' w-10 bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] p-4 rounded-lg' >
                                        <img src={More.src} alt="a" />
                                    </button>
                                    {/* <BlueLightBtn click={()=>{}} text='' icon={<img src={More.src} alt="" />} /> */}
                                </div>}
                            </div>
                            <Link href={`/business/products/${userDatas.id}/${item.id}`}>
                                <div className='flex flex-row w-full px-1  '>
                                    <div className='grow'><b className="text-[var(--gray)] text-[.7em]">{item.title}</b></div>
                                    <div className='flex-none flex flex-row text-sm'>
                                        <div><b className="text-[var(--gray)] text-[.7em]">{(+item.price).toLocaleString()}</b></div>
                                        <div className="rotate-180  text-[var(--gray)] text-[.7em]" style={{ writingMode: 'vertical-rl' }} >
                                            تومان
                                        </div>
                                    </div>
                                </div>
                                <div className='px-1 py-2'><p className="text-[var(--gray)] text-[.7em]"> {item.description.substring(0, 50)} </p></div>
                            </Link>
                        </div>
                    ))}
                <MoreBtn
                    click={() => { setPage(page + 1); GetData(page + 1) }}
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
