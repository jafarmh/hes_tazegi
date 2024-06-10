import Archive from '@/app/components/archive'
import { BrochureGetMyListApi } from '@/app/redux/ApiCall/ApiAddress';
import DetailB from '@/app/components/business/detail/brochure/DetailB';
import LayoutMobileInnerPage from '@/app/components/layout/LayoutMobileInnerPage'
import React from 'react'
import TabsBlueLine from '@/app/components/elements/tabs/TabsBlueLine'
import { baseURL } from '@/utility/Config';

export default async function page({ params }: { params: { id: string } }) {

    const res = await fetch(baseURL + BrochureGetMyListApi + `/${params.id}`, { cache: 'no-store' });
    const DataDetail = await res.json()


    return (
        <>
            <LayoutMobileInnerPage urlBack='/profile/brochure' type='backGeneral'>

                {/* <TabsBlueLine items={[
                    { active: true, link: "#", title: "دسته بندی" },
                    { active: false, link: "#", title: "دانلود شده" },
                    { active: false, link: "#", title: "دسته بندی" },
                    { active: false, link: "#", title: "دسته بندی" },
                ]} /> */}
                <DetailB data={DataDetail.data} userDatas={{
                    about: "",
                    address: "",
                    attach: [],
                    email: "",
                    id: "",
                    deleted_at: "",
                     managerName: "",
                     mobile:"",
                     name:"",
                     resume:"",
                     status:0,
                     type:"company",
                     webLink:"",
                     instagram:"",
                     telegram:""

                }} />
                {/* <Archive data={DataDetail.data}/> */}

            </LayoutMobileInnerPage>
        </>
    )
}
