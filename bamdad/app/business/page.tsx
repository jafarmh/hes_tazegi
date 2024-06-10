import Business from '../components/business'
import LayoutMobile from '../components/layout/LayoutMobile'
import React from 'react'
import { UsersListApi } from '../redux/ApiCall/ApiAddress';
import { baseURL } from '@/utility/Config';

export default async function page() {

    const res = await fetch(baseURL + UsersListApi, { cache: 'no-store' });
    const UsersList = await res.json()


    return (
        <>
            <LayoutMobile>


                <Business
                    listData={UsersList.data?.data}
                    current_page={UsersList.data.current_page}
                    to={UsersList.data.to}
                    total={UsersList.data.total}
                />



            </LayoutMobile>
        </>
    )
}
