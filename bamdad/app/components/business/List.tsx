'use client'

import CNN from '@/asset/img/empty.jpg'
import Link from 'next/link'
import React from 'react'
import { RootState } from '@/app/redux/Store'
import { getImageProf } from '@/utility/Function'
import { useSelector } from 'react-redux'

export default function List() {

    const UserList=useSelector((state:RootState)=>state.UserList)

  return (
   
    <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
    {UserList&&UserList.map((item) => (
        <Link href={"/business/"+item.id}>
        <div className="flex flex-row p-3 items-center gap-x-4 bg-[var(--white)] rounded-lg">
            <div className=" rounded-3xl w-20 "><img className="w-20 h-20 object-cover rounded-xl" src={ getImageProf(item.attach)?.path??CNN.src} /></div>
            <div className="flex-grow flex flex-col gap-y-2">
                <div className=""><p className="text-[var(--black)] font-bold">{item.name}</p></div>
                <div className="text-[var(--gray)] text-sm"><p>
                   {item.about?.substring(0,50)}
                </p>
                </div>
            </div>
        </div>
    </Link>
    ))
    // :
    // [1,2,3,4,5].map(()=>(
    //         <div className="flex flex-row p-3 items-center gap-x-4 bg-[var(--white)] rounded-lg">
    //             <div className="flex-grow"><img className="w-40" src={CNN.src} /></div>
    //             <div className=" flex flex-col gap-y-2">
    //                 <div className=""><p className="font-bold">نام کسب و کار</p></div>
    //                 <div className="text-[var(--gray)] text-sm"><p>
    //                     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ...
    //                 </p>
    //                 </div>
    //             </div>
    //         </div>
    // ))
}

</div>
  )
}
