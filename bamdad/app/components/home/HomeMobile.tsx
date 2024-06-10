'use client';

import CartNews from "../exportSolution/CartNews";
import CartNewsFirst from "../exportSolution/CartNewsFirst";
import EventsNews from "./EventsNews";
import { ExportSolutionProps } from "@/app/interface/Entity";
import React from 'react'

export default function HomeMobile({ ExportSolutionList, News, Events,Media,Meg }: { ExportSolutionList: ExportSolutionProps[], News: any, Events: any, Media: any, Meg: any }) {
  
    return (
        <>
            {ExportSolutionList.length > 0 && <CartNewsFirst data={News[0]} />}
            {/* {ExportSolutionList.length > 0 && <CartNews data={ExportSolutionList[0]} />} */}


            {/* <div className="  w-full mt-5">
                <h1 className={`text-[var(--black)] font-bold  text-sm`}> ویرایش های محبوب </h1>
            </div> */}

            <EventsNews News={News} Events={Events}
                Media={Media}
                Meg={Meg} />


        </>
    )
}
