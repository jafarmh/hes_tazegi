'use client';

import React, { useEffect, useState } from 'react'
import { emptyDataCategory, setDataCategory } from '@/app/redux/reducer/general/Category';

import Back from '@/asset/img/back.svg';
import { BlueLightBtn } from '../../button/Btns';
import DrawerBottom from '..';
import { GetCategory } from '@/app/redux/ApiCall/General';
import ProfileDrawer from './ProfileDrawer';
import RadioGroupsImage from '../../radio/RadioGroupsImage';
import SearchGray from '../../search/SearchGray';
import { setUserCountryRegister } from '@/app/redux/reducer/user/Register';
import { useDispatch } from 'react-redux';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function CategoryDrawer(props: Props) {
    const dispatch = useDispatch();
    const { isOpen, changeOpen } = props
    const [openProfile, setOpenProfile] = useState(false);
    const { t } = useTranslation();
    const dir = useRtlLtr()
    const [oldParent, setOldParent] = useState<string[]>(["0"]);
    const [parent, setParent] = useState("0");
    const GetData = (parent: string) => {
        GetCategory(parent, (res: any) => {
            if (res) {
                dispatch(emptyDataCategory(res.data))
                dispatch(setDataCategory(res.data))
            }
        })
    }

    useEffect(() => {
        GetData("0");
    }, [])

    return (
        <>
            <DrawerBottom isOpen={isOpen} changeOpen={changeOpen} height='90vh' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-4 " dir={dir}>
                    <div className='text-right'><b className='text-[var(--black)]' >{t("chooseCategory")}</b></div>
                    <div><p className="text-[var(--gray)] text-sm">{t("categoryDesc")}</p></div>
                    {/* <SearchGray /> */}
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
                    <div className='w-full mt-4 '>
                        <div> <RadioGroupsImage
                            changeF={(value: any) => dispatch(setUserCountryRegister({ categories: [value] }))}
                            parentChange={(parent: string) => {
                                setParent(parent.toString());
                                GetData(parent.toString());
                                setOldParent([...oldParent, ...[parent.toString()]]);
                            }}
                        />
                        </div>
                    </div>

                    <div className="flex flex-row w-full gap-x-2 ">
                        <BlueLightBtn click={() => setOpenProfile(true)} text={t("confirm")} />
                    </div>
                </div>

            </DrawerBottom>
            {openProfile && <ProfileDrawer changeOpen={(value: boolean) => setOpenProfile(value)} isOpen={openProfile} />}

        </>
    )
}
