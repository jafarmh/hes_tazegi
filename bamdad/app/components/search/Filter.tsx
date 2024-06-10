"use client"

import { CategoryProps, CountryProps } from '@/app/interface/Entity'
import { GetUsers, GetUsersWithoutPage } from '@/app/redux/ApiCall/User'
import React, { useEffect, useMemo, useState } from 'react'
import { setBrochure, setBrochureEmpty, setProduct, setProductEmpty, setService, setServiceEmpty, setSolution, setSolutionEmpty, setUser, setUserEmpty } from '@/app/redux/reducer/general/Search'
import { useDispatch, useSelector } from 'react-redux'

import ArrowDown from '@/asset/img/arrowDownBlack.svg'
import BrochuresList from './Brochures'
import CategoryCheckBoxDrawer from '../elements/drawer/CategoryCheckBoxDrawer';
import CountryDrawer from '@/app/components/elements/drawer/common/CountryDrawer'
import { DisableBtnLoadingBlue } from '../elements/button/Btns'
import { GetBrochures } from '@/app/redux/ApiCall/Brochure'
import { GetExportSolutionList } from '@/app/redux/ApiCall/ExportSolution'
import { GetProducts } from '@/app/redux/ApiCall/ProductService'
import { Pluck } from '@/utility/Function'
import Products from './Products'
import RadioFilterType from '@/app/components/elements/radio/RadioFilterType'
import { RootState } from '@/app/redux/Store'
import SearchGray from '@/app/components/elements/search/SearchGray'
import ServicesList from './Services'
import SolutionList from './SolutionList';
import SwitchE from '@/app/components/elements/switch/Switch'
import Trash from '@/asset/img/trash.svg'
import UsersList from './UsersList'
import { emptyDataCategorySelectedValue } from '@/app/redux/reducer/general/CategorySelectedValue'
import { emptyDataCountrySelectedValue } from '@/app/redux/reducer/general/CountrySelectedValue';
import { setDataCategory } from '@/app/redux/reducer/general/Category'
import { setDataCountry } from '@/app/redux/reducer/general/Country'
import { useTranslation } from 'react-i18next';

export default function Filter({ category, country }: { category?: any, country: CountryProps[] }) {
    const [searchClick, setSearchClick] = useState('');
    const [openCategory, setOpenCategory] = useState(false);
    const [openCountry, setOpenCountry] = useState(false);
    const [typeSearch, setTypeSearch] = useState("product");
    const [wordSearch, setWordSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [UserStatus, setUserStatus] = useState<0 | 1>(1);
    const [CategorySelected, setCategorySelected] = useState<CategoryProps>();

    const CountrySelected = useSelector((state: RootState) => state.CountrySelectedValue);
    const DataCategorySelected=useSelector((state:RootState)=>state.CategorySelectedValue);    //const CategorySelected:any=[];
    const dispatch = useDispatch();
    const { t } = useTranslation()
    useEffect(() => {
        if (category)
            dispatch(setDataCategory(category.data))
    }, [])
    useEffect(() => {
        if (country)
            dispatch(setDataCountry(country))
    }, [country])

    const ResetData = () => {
        dispatch(setSolutionEmpty())
        dispatch(setProductEmpty());
        dispatch(setServiceEmpty());
        dispatch(setBrochureEmpty());
        dispatch(setUserEmpty())
    }

    const ChangeType = (data: string) => {
        setTypeSearch(data)
        ResetData()
    }


    const SearchBtn = () => {
        setDisabled(true);
        setLoading(true);
        switch (typeSearch) {
            case "product": {
                let obj: any = { type: "product" };
                if (wordSearch.length > 0) {
                    obj['title'] = wordSearch
                }
                if (DataCategorySelected !== undefined && DataCategorySelected.length>0) {
                    obj['category_id'] = Pluck(DataCategorySelected,"id").toString()
                }
                GetProducts(obj, (res: any) => {
                    
                    setDisabled(false);
                    setLoading(false);
                    if (res) {
                        dispatch(setProductEmpty());
                        dispatch(setProduct(res.data));
                        setSearchClick('product');

                    }
                })
                break;
            }
            case "service": {
                let obj: any = { type: "service" };
                if (wordSearch.length > 0) {
                    obj['title'] = wordSearch
                }
                if (CategorySelected !== undefined) {
                    obj['category_id'] = CategorySelected?.id
                }
                GetProducts(obj, (res: any) => {
                    
                    setDisabled(false);
                    setLoading(false);
                    if (res) {
                        dispatch(setServiceEmpty());
                        dispatch(setService(res.data));
                        setSearchClick('service');
                        //router.push("/search");
                    }
                })
                break
            }
            case "brochure": {
                GetBrochures({ title: wordSearch }, (res: any) => {
                    setDisabled(false);
                    setLoading(false);
                    if (res) {
                        dispatch(setBrochureEmpty());
                        dispatch(setBrochure(res.data));
                        setSearchClick('brochure');
                        // router.push("/search");
                    }
                })
                break
            }
            case "user": {
                GetUsersWithoutPage({ name: wordSearch, status: UserStatus }, (res: any) => {
                    setDisabled(false);
                    setLoading(false);
                    if (res) {
                        dispatch(setUserEmpty())
                        dispatch(setUser(res.data));
                        setSearchClick('user');
                        //router.push("/search");
                    }
                })
                break
            }

            case "exportSolution": {
                let obj: any = {};
                if (wordSearch.length > 0) {
                    obj['title'] = wordSearch
                }
                if (CountrySelected.length > 0) {
                    obj['country_id'] = CountrySelected[0].id
                }
                if (CategorySelected !== undefined) {
                    obj['category_id'] = CategorySelected?.id
                }
                
                GetExportSolutionList(obj, (res: any) => {
                    setDisabled(false);
                    setLoading(false);
                    if (res) {
                        dispatch(setSolutionEmpty())
                        dispatch(setSolution(res.data));
                        setSearchClick('exportSolution');
                    }
                })
                break
            }
        }
    }
    return (
        <>
            <div className='flex flex-col justify-center'>

                <SearchGray changeValue={setWordSearch} />
                {typeSearch === 'exportSolution' &&

                    <div className='w-full my-4 flex flex-row'>
                        <button onClick={() => setOpenCountry(true)} className='w-full bg-[var(--lightGrey)] h-[48px] rounded-[12px]'>
                            <div className="flex flex-row gap-x-1 p-[12px] ">
                                <div className='flex-grow text-right'>
                                    <p className='text-[var(--gray)] text-[14px] font-[500]'>
                                        {CountrySelected.length > 0 ? CountrySelected[0].name !== '' ? CountrySelected[0].name : CountrySelected[0].name_en : t("chooseCountryFilter")}

                                    </p>
                                </div>
                                <div><img src={ArrowDown.src} alt='btn-icon' /></div>
                            </div>
                        </button>
                        {CountrySelected.length > 0 && <div className=' flex flex-row items-center'>
                            <img className='cursor-pointer' src={Trash.src} alt='' onClick={() => dispatch(emptyDataCountrySelectedValue())} />
                        </div>}
                    </div>}
                {(typeSearch === 'exportSolution' || typeSearch === 'product' || typeSearch === 'service') &&
                    <div className='w-full  flex flex-row'>
                        <button onClick={() => setOpenCategory(!openCategory)} className="w-full bg-[var(--lightGrey)] h-[48px] rounded-[12px] mt-1">
                            <div className={`flex flex-row gap-x-1 p-[12px] `}>
                                <div className='flex-grow text-right'>
                                    <p className='text-[var(--gray)] text-[10px] font-[500]'>
                                        {DataCategorySelected.length>0?Pluck(DataCategorySelected,"name")?.toString() : t("chooseCategoryFilter")}
                                    </p>
                                </div>
                                <div><img src={ArrowDown.src} alt='btn-icon' /></div>
                            </div>
                        </button>
                        {DataCategorySelected.length>0 && <div className=' flex flex-row items-center'>
                            <img className='cursor-pointer' src={Trash.src} alt='' onClick={() => dispatch(emptyDataCategorySelectedValue())} />
                        </div>}
                    </div>}


                {typeSearch === 'user' &&
                    <>
                        <div className='w-full my-1 '>
                            <div className="flex flex-row gap-x-1 p-[12px] ">
                                <div className='flex-grow text-right'>
                                    <p className='text-[var(--gray)] text-[14px] font-[500]'>
                                        نمایش شرکت های تایید شده
                                    </p>
                                </div>
                                <div> <SwitchE checked={UserStatus ? true : false} ChangeValue={(param: any) => setUserStatus(param.checked ? 1 : 0)} /> </div>
                            </div>
                        </div>
                        {[1].map(() => (
                            <div className='w-full my-0 '>
                                <div className="flex flex-row gap-x-1 p-[12px] ">
                                    <div className='flex-grow text-right'>
                                        <p className='text-[var(--gray)] text-[14px] font-[500]'>
                                            نمایش شرکت های دیگر
                                        </p>
                                    </div>
                                    <div> <SwitchE Disabled ChangeValue={(param: any) => setUserStatus(param.checked ? 1 : 0)} /> </div>
                                </div>
                            </div>
                        ))}
                    </>}

                {/* <LineGray /> */}

                <div className='w-full my-4'>
                    <div> <RadioFilterType Change={(data: string) => ChangeType(data)} /> </div>
                </div>
                {/* <LineGray /> */}
                {/* <div className='w-full mt-4'>
                <div className='flex flex-col gap-y-4'> <CheckboxesGroup /> </div>
                </div> */}
                {/* <div className='w-full my-4'>
                <button className='w-full bg-[var(--orang)] h-[48px] rounded-[14px]'>
                         <div className='flex-grow text-center'>
                            <p className='text-[var(--white)] text-[14px] font-[500]'> نمایش (123 مورد)  </p>
                        </div>
                    
                </button>
                </div> */}

                <div className='mb-10'>
                    <DisableBtnLoadingBlue click={SearchBtn} disabled={disabled} loading={loading} text='اعمال فیلتر' />
                </div>

                {typeSearch === 'product' && <Products searchClick={searchClick=== 'product'}/>}
                {typeSearch === 'service' && <ServicesList searchClick={searchClick=== 'service'}/>}
                {typeSearch === 'brochure' && <BrochuresList searchClick={searchClick=== 'brochure'}/>}
                {typeSearch === 'user' && <UsersList searchClick={searchClick=== 'user'}/>}
                {typeSearch === 'exportSolution' && <SolutionList searchClick={searchClick=== 'exportSolution'}/>}
            </div>
                <div className='mb-10 h-6 w-full'></div>


            {openCategory && <CategoryCheckBoxDrawer ChangeValue={(value: CategoryProps) => setCategorySelected(value)} isOpen={openCategory} changeOpen={(value: boolean) => setOpenCategory(value)} />}
            {openCountry && <CountryDrawer isOpen={openCountry} changeOpen={(value: boolean) => setOpenCountry(value)} />}
        </>
    )
}
