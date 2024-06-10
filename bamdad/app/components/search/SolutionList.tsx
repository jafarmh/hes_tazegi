import EmptySearch from './EmptySearch'
import Link from 'next/link'
import React from 'react'
import Rectangle8_01 from '@/asset/img/empty.jpg'
import { RootState } from '@/app/redux/Store'
import { getImageProf } from '@/utility/Function'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export default function SolutionList({searchClick=false}:{searchClick?:boolean}) {
  const { t } = useTranslation();
  const data = useSelector((state: RootState) => state.Search.solutions)
  return (
    <>
      {data.length > 0 &&
        <>
          <div className="flex flex-row mb-2 mt-5">
            <div className='flex-grow'><b> {t("exportSolution")}</b></div>
            <div className='flex-none text-[var(--blueColor)]'>

            </div>
          </div>
          <div className="w-full mt-3 flex flex-col gap-y-4 mb-20">
            {data.map((item) => (
              <Link href={`/exportSolution/${item.id}`}>
                <div className="flex flex-row p-3 items-center gap-x-4" key={item.id}>
                  <div className="flex-none w-20"><img className="w-20 h-20 rounded-2xl object-cover" src={getImageProf(item.attach)?.path ?? Rectangle8_01.src} /></div>
                  <div className="flex-grow  flex flex-col gap-y-2">
                    <div className=""><p className="font-bold">{item.title}</p></div>
                    <div className="text-[var(--gray)] text-sm"><p>{item.description?.substring(0, 70)}...</p></div>

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
