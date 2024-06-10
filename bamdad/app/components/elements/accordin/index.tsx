import * as React from 'react';

import Arrow from '@/asset/img/arrow-square-down.png'
import { useState } from 'react';

export default function BasicAccordion({ data }: { data: any }) {
    const [id, setId] = useState('')
  
    return (
        <>
            {
               
                data.map((item: any) => (
                    <div key={item.id} className='bg-[var(--grayHashtag)] rounded-2xl p-3' >
                        <div onClick={() => { id===''?setId(item.id):setId('');data.length>=1&&id!==item.id?setId(item.id):setId('');}} className="flex flex-row items-center">
                            <div className='flex-grow'><b className='text-[var(--black)]' >{item.title}</b></div>
                            <div className='flex-none'><img src={Arrow.src} alt="Arrow" /></div>
                        </div>
                        <div className={`transition-all duration-1000  text-sm text-[var(--gray)] mt-1 ${item.id===id ? "opacity-100 h-full visible " : " opacity-0 h-0 invisible"}`}>
                            {item.id===id&& <p className={`${item.id===id ? "h-full  " : "h-0"}`}>{item.text}</p>
                            }
                        </div>

                    </div>
                ))
            }
        </>

    );
}