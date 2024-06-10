'use client'

import Countdown, { calcTimeDelta, formatTimeDelta, zeroPad } from 'react-countdown';
import React, { useEffect, useState } from 'react'

export default function Timer({ minutes = "00", seconds = "59",EndFunction }: { minutes?: string, seconds?: String,EndFunction:Function }) {

    const [minute, setMinute] = useState(+minutes);
    const [second, setSecond] = useState(+seconds);


  
    useEffect(() => {
        

        setTimeout(() => {
            if (minute > 0) {
                if (second > 0) {
                    setSecond(second - 1)
                } else {
                    setMinute(minute - 1)
                }
            } else {
                if (second > 0) {
                    setSecond(second - 1)
                } else {
                  
                    EndFunction();
                }
            }
        }, 1000);

    }, [minute, second]);
    return (
        <>
            <span className='text-sm  text-[var(--blueColor)]'>{zeroPad(minute)}:{zeroPad(second)}</span>
        </>
    )
}
