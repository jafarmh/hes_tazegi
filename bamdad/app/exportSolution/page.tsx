import APIBack from '../redux/ApiBack';
import ExportSolution from '../components/exportSolution';
import LayoutMobile from '../components/layout/LayoutMobile'
import React from 'react'
import TabsBlueLine from '../components/elements/tabs/TabsBlueLine'
import { baseURL } from '@/utility/Config';
import { exportSolutionApi } from '../redux/ApiCall/ApiAddress';

export default async function page() {

    const res = await fetch(baseURL + exportSolutionApi, { cache: 'no-store' });
    const ExportSolutionList = await res.json()
   
    return (
        <>
            <LayoutMobile>
               

                <ExportSolution
                    data={ExportSolutionList.data.data}
                    current_page={ExportSolutionList.data.current_page}
                    to={ExportSolutionList.data.to}
                    total={ExportSolutionList.data.total}
                />


            </LayoutMobile>
        </>
    )
}
