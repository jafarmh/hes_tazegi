'use client'

import React, { useEffect, useState } from 'react'
import { emptyUserListData, setUserListData } from '@/app/redux/reducer/user/UserList'

import { GetUsers } from '@/app/redux/ApiCall/User'
import { HeaderBusinessProps } from '@/app/interface/Headers'
import List from './List'
import MoreBtn from './MoreBtn'
import SearchBlueButton from '../elements/search/SearchBlueButton'
import TabsBlueLine from '../elements/tabs/TabsBlueLine'
import { useDispatch } from 'react-redux'

export default ({listData,current_page,to,total}:HeaderBusinessProps) => {
    const [name,setName]=useState("")
    const [page, setPage] = useState(+current_page ?? 1);
    const [haveMore, setHaveMore] = useState(false);

    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch=useDispatch()


    const GetData = (pageNumber: number = page) => {
        setDisabled(true)
        setLoading(true)
        let params:any={}
        if(name!==''){
            params['name']=name
        }
        GetUsers(pageNumber.toString(),params, (res: any) => {
            setDisabled(false);
            setLoading(false)
            if (res) {
             
               dispatch(setUserListData(res.data))
            }
        })
      

    }
    useEffect(() => {
        
            dispatch(emptyUserListData());
            dispatch(setUserListData(listData));
        
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

 
    const ClickSearch=()=>{
        setDisabled(true);
        setLoading(true)
        dispatch(emptyUserListData())
        GetData();
        
    }

    return (
        <>
         <TabsBlueLine items={[
                    { active: false, link: "/home", title: "همه خبر ها" },
                    { active: false, link: "/exportSolution", title: "راهکارهای صادراتی" },
                    { active: false, link: "/exhibition", title: " نمایشگاه ها" },
                    { active: true, link: "#", title: "کسب و کارها" },
                ]} />
            <div  className='sticky top-14 bg-[var(--white)] z-50 '>
            <SearchBlueButton disabled={disabled} loading={loading} ClickSearch={ClickSearch}  changeValue={setName}/>
            </div>
            <List/>
            <MoreBtn
                    click={() => { setPage(page + 1); GetData(page + 1) }}
                    disabled={disabled}
                    loading={loading}
                    haveMore={haveMore}
                />
        </>
    )
}
