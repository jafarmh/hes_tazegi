'use client';

import Dots from '@/asset/img/3dot.svg';
import { ExportSolutionProps } from '@/app/interface/Entity';
import IconsLine from './IconsLine'
import Link from 'next/link';
import React from 'react'
import Rectangle3 from '@/asset/img/empty.jpg';
import Rectangle4 from '@/asset/img/Rectangle4.png';
import Rectangle5 from '@/asset/img/Rectangle5.png';
import WriterName from '../home/WriterName';

const CreateImage1 = (image1: string, image2: string, image3: string) => {

    if (image2 === '' && image3 === '') {
        return <img className="rounded-2xl   max-[400px]:h-56   max-[450px]:h-56 w-full h-80 object-cover" src={image1 !== undefined && image1 !== '' ? image1 : Rectangle3.src} alt="rect3" />

    }
    if (image2 !== '' && image3 === '')
        return <img className="rounded-2xl max-[400px]:w-36 max-[400px]:h-40 max-[450px]:w-5h-40 max-[450px]:h-48 w-60 h-72 object-cover" src={image1 !== undefined && image1 !== '' ? image1 : Rectangle3.src} alt="rect3" />

    return <img className="rounded-2xl max-[400px]:w-36 max-[400px]:h-56 max-[450px]:w-48 max-[450px]:h-56 w-60 h-80 object-cover" src={image1 !== undefined && image1 !== '' ? image1 : Rectangle3.src} alt="rect3" />
}

const CreateImage2 = (image2: string, image3: string) => {
    if (image3 === '') {
        return <div><img className="rounded-2xl max-[400px]:w-36 max-[400px]:h-40 max-[450px]:w-5h-40 max-[450px]:h-48 w-60 h-72 object-cover"
            src={image2 !== undefined && image2 !== '' ? image2 : Rectangle3.src} alt="" /></div>

    }
    return <div><img className="max-[450px]:w-64 max-[450px]:h-28 w-64 h-40 rounded-2xl object-cover"
        src={image2 !== undefined && image2 !== '' ? image2 : Rectangle3.src} alt="" /></div>
}



export default function CartNewsFirst({ data }: { data: any }) {
    let image1 = data.better_featured_image?.media_details.sizes.thumbnail.source_url ?? "";
    let image2 = "";
    let image3 = "";
    return (
        <div className="bg-[var(--white)] rounded-2xl p-4  mb-3" >
            <Link href={data.link}>
                <div className='flex flex-col gap-y-4'>
                    <div className=''>
                        <p className="font-bold" dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
                    </div>
                    {/* <div><WriterName data={data.expert} /></div> */}

                    <div className="flex flex-row gap-x-2  w-full  ">
                        <div className={`${image2 !== '' ? "flex-none" : "w-full flex-none"}`}>
                            {CreateImage1(image1, image2, image3)}
                        </div>
                        <div className="w-full flex-grow flex flex-col gap-y-2">
                            {image2 !== '' && CreateImage2(image2, image3)}
                            {image3 !== '' && <div><img className="max-[450px]:w-64 max-[450px]:h-28 w-64 h-40 rounded-2xl object-cover" src={Rectangle5.src} alt="" /></div>}

                        </div>
                    </div>
                </div >
            </Link>
            <div className="mt-4 flex flex-row gap-x-2 w-full">
                <div className='flex-grow'>
                    {/* <img src={Dots.src} alt="Dots" /> */}
                </div>
                {/* <IconsLine data={data} /> */}

            </div>
        </div>
    )
}
