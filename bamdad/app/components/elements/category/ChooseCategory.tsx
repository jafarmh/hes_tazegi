'use client'

import React, { useState } from 'react'

import ArrowDown from '@/asset/img/arrowDownBlack.svg'
import CategoryDrawer from '../drawer/CategoryDrawer';
import { CategoryProps } from '@/app/interface/Entity';
import Trash from '@/asset/img/trash.svg'
import { useTranslation } from 'react-i18next';

type Props = {
    name: string,
    Controller: any,
    getValues: Function,
    control: any,
    reset: Function,
    setOpenCategory:Function,
    openCategory:boolean,
    CategorySelected:CategoryProps|undefined,
    setCategorySelected:Function
}

export default function ChooseCategory({ name, Controller, setCategorySelected,CategorySelected, control, reset,setOpenCategory,openCategory }: Props) {
 
    const {t}=useTranslation();

 
    return (
        <>


            <Controller
                name={name}
                control={control}
                defaultValue={CategorySelected?.id??""}
                render={({ field }: { field: any }) => (
                    <div className='w-full flex flex-row'>
                        <button onClick={() => setOpenCategory(!openCategory)} className='w-full bg-[var(--lightGrey)] h-[48px] rounded-[12px]'>
                            <div className="flex flex-row gap-x-1 p-[12px] ">
                                <div className='flex-grow text-right'>
                                    <p className='text-[var(--gray)] text-[14px] font-[500]'>
                                        {CategorySelected?.name ?? t("chooseCategoryFilter")}
                                    </p>
                                </div>
                                <div><img src={ArrowDown.src} alt='btn-icon' /></div>

                            </div>
                        </button>
                        {CategorySelected !== undefined && <div className=' flex flex-row items-center'>
                            <img className='cursor-pointer' src={Trash.src} alt='' onClick={() => {setCategorySelected(undefined);   reset(name);}} />
                        </div>}
                    </div>

                )}
            />
        

        </>
    )
}