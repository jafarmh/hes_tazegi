'use client';

import LineBlue from '../line/LineBlue'
import Link from 'next/link'
import React from 'react'

interface ItemsProps { title: string, link: string, active: boolean }

interface TabsProps {
  items: ItemsProps[]
}

export default function TabsBlueLine(props: TabsProps) {
  const { items } = props

  return (


    <div className="flex flex-row justify-between h-14 mt-5 align-baseline sticky top-0 left-0 w-full bg-[--white] py-4 z-50">
      {items.map((item) => {
        return <>
          <div className="flex flex-col gap-y-2 ">
            <div className={`${item.active ? "text-sm text-[var(--gray)]" : "text-[.7rem] text-[var(--gray)]"} `}><Link href={item.link}>{item.title}</Link></div>
            {item.active && <div><LineBlue /></div>}
          </div>

        </>
      })}

    </div>

  )
}
