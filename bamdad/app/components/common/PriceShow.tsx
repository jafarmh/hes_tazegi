'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PriceShow({price}:{price:number}) {
    const {t}=useTranslation();
    return (
        <div className='flex-none flex flex-row text-sm'>
            <div><b className="text-[var(--gray)]">{price.toLocaleString()}</b></div>
            <div className="rotate-180  text-[var(--gray)]" style={{ writingMode: 'vertical-rl' }} >
                {t('tooman')}
            </div>
        </div>
    )
}
