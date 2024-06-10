import React from 'react'

export default function TwoOrangBtn() {
    return (
        <>
            <div className=" ">
                <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
                    <span className={`text-[var(--orang)]`}>ابزارها را ببینید</span>
                </button>

            </div>
            <div className=" ">
                <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
                    <span className={`text-[var(--orang)]`}>به رسانه ها مراجعه کنید</span>
                </button>

            </div>
        </>
    )
}
