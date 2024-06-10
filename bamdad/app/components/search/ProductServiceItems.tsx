import Link from 'next/link'
import { ProductData } from '@/app/interface/Entity'
import React from 'react'
import Rectangle8_01 from '@/asset/img/empty.jpg'
import WriterName from '@/app/components/home/WriterName'
import { getImageProf } from '@/utility/Function'

export default function ProductServiceItems({data}:{data:ProductData}) {
    return (
        <>
            <Link  href={data.type === "service" ?
                `/business/services/${data.user_id}/${data.id}`
                : `/business/products/${data.user_id}/${data.id}`}>
                <div className="flex flex-row p-3 items-center gap-x-4" key={data.id}>
                    <div className="flex-none w-20">
                        <img className="w-20 h-20 rounded-2xl object-cover" src={getImageProf(data.attach)?.path ?? Rectangle8_01.src} />
                        </div>
                    <div className="flex-grow  flex flex-col gap-y-2">
                        <div className=""><p className="font-bold">{data.title}</p></div>
                        <div className="text-[var(--gray)] text-sm"><p>{data.description.substring(0, 70)}...</p></div>
                        <div className="">
                            <WriterName
                                data={data.user}
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
