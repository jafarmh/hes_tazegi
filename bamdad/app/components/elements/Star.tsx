'use client'

import * as React from 'react';

import Rating from '@mui/material/Rating';
import useRtlLtr from '@/app/hooks/RtlLtr';

interface Props
{
    rate:string
}

export default function Star({rate}:Props) {
    const dir=useRtlLtr()

    return (



        <Rating dir={dir} size='small' name="read-only" value={+rate} readOnly />


    );
}