import React, { useEffect, useState } from 'react'
import { emptyDataCategory, setDataCategory } from '@/app/redux/reducer/general/Category';
import { useDispatch, useSelector } from 'react-redux';

import Back from '@/asset/img/back.svg';
import { BlueLightBtn } from '../button/Btns';
import CategoryCheckBoxList from '../category/CategoryCheckBoxList';
import DrawerBottom from '.'
import { GetCategory } from '@/app/redux/ApiCall/General';
import { RootState } from '@/app/redux/Store';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
    ChangeValue?: Function
}
export default function CategoryCheckBoxDrawer(props: Props) {
    const dispatch = useDispatch();
    const { isOpen, changeOpen } = props
    const { t } = useTranslation();
    const dir = useRtlLtr();
    const [oldParent, setOldParent] = useState<string[]>(["0"]);
    const [parent, setParent] = useState("0");
    const DataCategory = useSelector((state: RootState) => state.categoryDatas)
    const GetData = (parent: string) => {
        GetCategory(parent, (res: any) => {
            if (res) {
                dispatch(emptyDataCategory(res.data))
                dispatch(setDataCategory(res.data))
            }
        })
    }

    useEffect(() => {
        dispatch(emptyDataCategory())
        GetData("0");
    }, [])

    const parentChange=(parent: string) => {

        setParent(parent.toString());
        GetData(parent.toString());
        setOldParent([...oldParent, ...[parent.toString()]]);
    }
    return (
        <>
            <DrawerBottom isOpen={isOpen} changeOpen={changeOpen}>
                <div className="flex flex-col gap-y-4 min-h-full overflow-y-auto " dir={dir}>
                    <div className='text-right'><b className='text-[var(--black)]' >{t("chooseCategory")}</b></div>
                    <div><p className="text-[var(--gray)] text-sm">{t("categoryDesc")}</p></div>
                    {/* <SearchGray changeValue={(value:string)=>console.log(value)}/> */}
                    <div className='w-full mt-4 '>
                        <div>
                            <div className="w-full" dir='ltr'>
                                {parent !== '0' && <div className='cursor-pointer w-full'
                                    onClick={() => {
                                        let parentsRemove = oldParent[oldParent.length - 1]
                                        let parents = oldParent[oldParent.length - 2]
                                        GetData(parents);
                                        setParent(parents);
                                        if (oldParent.length > 1)
                                            setOldParent(oldParent.filter((item) => item !== parentsRemove))

                                    }
                                    }>
                                    <img src={Back.src} alt='back' /></div>}
                            </div>
                            <div className={`w-full  ${DataCategory[0].id === ''?"text-center":""}`}>
                                    <CategoryCheckBoxList parentChange={parentChange} />
                            </div>
                        </div>
                    </div>
                     <div className='w-full flex-grow flex justify-end items-end mb-2'>
                            <BlueLightBtn click={() => changeOpen(false)} text='تایید' />
                        </div> 
                </div>

            </DrawerBottom>
        </>
    )
}
