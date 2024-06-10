import { BrochureData } from '@/app/interface/Entity'
import EmptySearch from './EmptySearch'
import Link from 'next/link'
import React from 'react'
import Rectangle8_01 from '@/asset/img/empty.jpg'
import { RootState } from '@/app/redux/Store'
import WriterName from '@/app/components/home/WriterName'
import { getImageProf } from '@/utility/Function'
import { useSelector } from 'react-redux'

export default function BrochuresList({searchClick=false}:{searchClick?:boolean}) {

  const data = useSelector((state: RootState) => state.Search.brochure)
  return (
    <>
      {data.length > 0 &&
        <>
          <div className="flex flex-row mb-2 mt-5">
            <div className='flex-grow'><b>بروشور</b></div>
            <div className='flex-none text-[var(--blueColor)]'>

            </div>
          </div>
          <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
            {data.map((item) => (
              <Link href={`/business/brochure/${item.user_id}/${item.id}`}>
                <div className="flex flex-row p-3 items-center gap-x-4" key={item.id}>
                  <div className="flex-none w-20"><img className="w-20 h-20 rounded-2xl object-cover" src={getImageProf(item.attach)?.path ?? Rectangle8_01.src} /></div>
                  <div className="flex-grow  flex flex-col gap-y-2">
                    <div className=""><p className="font-bold">{item.title}</p></div>
                    <div className="text-[var(--gray)] text-sm"><p>{item.description.substring(0, 70)}...</p></div>
                    <div className="">
                      <WriterName
                        data={item.user}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </>
      }
      {data.length <= 0 && searchClick && <EmptySearch />}

    </>
  )
}
