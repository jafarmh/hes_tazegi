'use client';

import { GeUserListBrochure, GetBrochureDetail, GetMuListB, RemoveBrochure } from '@/app/redux/ApiCall/Brochure';
import { HeaderBrochureMobileProductProps, HeaderBusinessMobileProps } from '@/app/interface/Headers'
import React, { useEffect, useState } from 'react'
import { emptyBrochureMeData, setBrochureMeData } from '@/app/redux/reducer/user/Brochure';
import { emptyDataSiteInfo, setDataSiteInfo } from '@/app/redux/reducer/general/SiteInfo';
import { useDispatch, useSelector } from 'react-redux';

import ActionsBusinessDrawer from '@/app/components/elements/drawer/business/ActionsBusinessDrawer';
import { BrochureData } from '@/app/interface/Entity';
import Dox from '@/asset/img/docx.png'
import EditBrochureBusinessDrawer from '@/app/components/elements/drawer/business/EditBrochureBusinessDrawer';
import Header from '../Header'
import Link from 'next/link'
import More from '@/asset/img/more.png';
import MoreBtn from '../../MoreBtn';
import Pdf from '@/asset/img/pdf.png'
import { RootState } from '@/app/redux/Store';
import TabsBlueLine from '@/app/components/elements/tabs/TabsBlueLine'
import Xlsx from '@/asset/img/xlsx.png'
import arrowD from '@/asset/img/arrow-down.svg'
import { setBrochureDetailData } from '@/app/redux/reducer/user/BrochureDetail';
import { useTranslation } from "react-i18next";

export default function Brochure(props: HeaderBrochureMobileProductProps) {
  const { haveAction, brochureData, userDatas, ranks, current_page, to, total, SiteInfo } = props
  const MyData = useSelector((state: RootState) => state.Brochure);
  const [openAction, setOpenAction] = useState(false);
  const [openAddEdit, setOpenAddEdit] = useState(false);
  const [dataSelected, setDataSelected] = useState<BrochureData>();
  const [page, setPage] = useState(+current_page ?? 1);
  const [haveMore, setHaveMore] = useState(false);
  const [length, setLength] = useState(to ?? 0);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch()


  const GetData = (pageNumber: number = page) => {
    setDisabled(true)
    setLoading(true)
    if (haveAction) {
      GetMuListB(pageNumber.toString(), (res: any) => {
        setDisabled(false)
        setLoading(false)
        if (res) {
          if (pageNumber === 0) {
            dispatch(emptyBrochureMeData());
          }
          dispatch(setBrochureMeData(res.data));
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

      GeUserListBrochure(userDatas.id, pageNumber.toString(), (res: any) => {
        setDisabled(false)
        setLoading(false)
        if (res) {
          dispatch(setBrochureMeData(res.data));
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
      dispatch(emptyBrochureMeData());
      GetData();
    } else {
      dispatch(emptyBrochureMeData());
      dispatch(setBrochureMeData(brochureData));
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
  useEffect(() => {
    if (SiteInfo !== undefined) {
      dispatch(emptyDataSiteInfo())
      dispatch(setDataSiteInfo(SiteInfo))
    }

  }, [SiteInfo])



  const Edit = (data: BrochureData) => {
    GetBrochureDetail(data.id.toString(), (res: any) => {
      if (res) {
        dispatch(setBrochureDetailData(res));
        setOpenAddEdit(true);
        setOpenAction(false)
      }

    })
  }

  const Remove = (data: BrochureData) => {
    RemoveBrochure(data.id.toString(), () => {
      dispatch(emptyBrochureMeData());
      GetData(1)
      // GetMuListB('1',(res: any) => {
      //   if (res) {
      //     setPage(1);
      //     dispatch(emptyBrochureMeData());
      //     dispatch(setBrochureMeData(res.data));
      //   }
      // })
    })
  }

  return (
    <>
      <Header  data={userDatas} haveAction={haveAction} />
      <TabsBlueLine items={[
        { active: false, link: haveAction ? "/profile" : "/business/" + userDatas.id, title: t('contactUs') },
        { active: false, link: haveAction ? "/profile/services" : "/business/services/" + userDatas.id, title: t('services') },
        { active: false, link: haveAction ? "/profile/products" : "/business/products/" + userDatas.id, title: t('products') },
        { active: true, link: "#", title: t('brochure') },
      ]} />

      <div className="flex flex-col mb-20 gap-y-4 ">
        {MyData.map((item) => (
          <div className="flex flex-row gap-x-2 justify-center items-center">
            <Link className="flex-grow flex flex-row gap-x-2 justify-center items-center" href={haveAction ? "/profile/brochure/" + item.id : "/detail/" + item.id}>
              <div className='w-20'><img className='w-20 h-2w-20 object-cover' src={Pdf.src} alt="pdf" /></div>
              <div className='flex-grow w-full flex flex-col gap-y-2 text-sm'>
                <div><b className='text-[var(--black)]' >{item.title}</b></div>
                <div><p className="text-[var(--gray)] text-xs"> {item.description.substring(0, 50) + ' ...'} </p></div>
              </div>
            </Link>
            <div>
              <button onClick={() => { setDataSelected(item); setOpenAction(true) }} className=' w-10 bg-gradient-to-r from-[var(--blueColor)] to-[var(--blue)] p-4 rounded-lg' >
                <img src={More.src} alt="a" />
              </button>
            </div>
          </div>

        ))}
        {MyData.length <= 0 && !haveAction && <>
          {brochureData.map((item) => (
            <Link href={`/business/brochure/${userDatas.id}/${item.id}`}>
              <div className="flex flex-row gap-x-2 justify-center items-center">
                <div><img className='w-36' src={Pdf.src} alt="pdf" /></div>
                <div className='flex flex-col gap-y-2 text-sm'>
                  <div><b className='text-[var(--black)]' >{item.title}</b></div>
                  <div><p className="text-[var(--gray)]" >{item.description.substring(0, 50) + ' ...'}</p></div>
                </div>
                <div><img className='w-20' src={arrowD.src} alt="arrowD" /></div>
              </div>
            </Link>
          ))
          }

        </>}

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
      {openAddEdit && <EditBrochureBusinessDrawer
        changeOpen={(value: boolean) => setOpenAddEdit(value)}
        isOpen={openAddEdit}

      />
      }
    </>

  )
}
