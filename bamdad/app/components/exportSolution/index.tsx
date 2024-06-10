'use client'

import { ExportSolutionPageProps, ExportSolutionProps } from '@/app/interface/Entity';
import React, { useEffect, useState } from 'react'
import { emptyDataExportSolution, setDataExportSolution } from '@/app/redux/reducer/general/ExportSolution';
import { useDispatch, useSelector } from 'react-redux';

import CartNews from './CartNews';
import { GetExportSolutionListPage } from '@/app/redux/ApiCall/ExportSolution';
import MoreBtn from '../business/MoreBtn';
import { RootState } from '@/app/redux/Store';
import TabsBlueLine from '../elements/tabs/TabsBlueLine';
import { useTranslation } from 'react-i18next';

export default function ExportSolution({ data, current_page, to, total }: ExportSolutionPageProps) {

    const [page, setPage] = useState(+current_page ?? 1);
    const [haveMore, setHaveMore] = useState(false);
    const [length, setLength] = useState(to ?? 0);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const MyData = useSelector((state: RootState) => state.ExportSolutionData);

    const GetData = (pageNumber: number = page) => {
        setDisabled(true)
        setLoading(true)

        GetExportSolutionListPage(pageNumber.toString(), (res: any) => {
            setDisabled(false)
            setLoading(false)
            if (res) {
                dispatch(setDataExportSolution(res.data));
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
    useEffect(() => {

        dispatch(emptyDataExportSolution());
        dispatch(setDataExportSolution(data));

    }, [data])

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
    const { t } = useTranslation();

    return (
        <>
            {/* <SearchBlueButton /> */}
            <TabsBlueLine items={[
                { active: false, link: "/home", title: t("allNews") },
                { active: true, link: "#", title: t("exportSolution") },
                { active: false, link: "/exhibition", title: t("allExhibition") },
                { active: false, link: "/business", title: t("accounts") },
            ]} />

            {MyData && MyData.map((item) => (<>
                <div className='mb-20'>
                    <CartNews data={item} />
                </div>

            </>))
            }


            <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">

                <MoreBtn
                    click={() => { setPage(page + 1); GetData(page + 1) }}
                    disabled={disabled}
                    loading={loading}
                    haveMore={haveMore}
                />
            </div>

        </>
    )
}
