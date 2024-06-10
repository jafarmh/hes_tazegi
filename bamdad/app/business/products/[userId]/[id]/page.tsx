import { ProductGetMyListApi, UsersApi } from "@/app/redux/ApiCall/ApiAddress";

import Detail from "@/app/components/business/detail/product/Detail";
import LayoutMobileInnerPage from "@/app/components/layout/LayoutMobileInnerPage";
import { baseURL } from "@/utility/Config";

export default async function page({ params }: { params: { userId: string, id: string } }) {
    const res = await fetch(baseURL + UsersApi + `/${params.userId}`, { cache: 'no-store' });
    const DataDetail = await res.json()

    const res2 = await fetch(baseURL + ProductGetMyListApi + `/${params.id}`, { cache: 'no-store' });
    const DataDetail2 = await res2.json()

    return (
        <LayoutMobileInnerPage urlBack='' type='more'>
        {/* <LayoutMobileInnerPage urlBack={'/business/products/' + params.userId} type='more'> */}
            <Detail data={DataDetail2.data} />
        </LayoutMobileInnerPage>
    )
}