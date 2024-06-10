import { BlueLightBtn, DisableBtn, DisableBtnLoadingBlue, OrangLightBtn } from '../../button/Btns'
import React, { useEffect, useState } from 'react'
import { emptyDataRanks, setDataRanks } from '@/app/redux/reducer/general/Ranks';

import ArrowDown from '@/asset/img/arrowDownBlack.svg'
import DrawerBottom from '..'
import { GetRanks } from '@/app/redux/ApiCall/General';
import Loader from '../../Loader';
import { SetRank } from '@/app/redux/ApiCall/User';
import SuccessDrawer from '../SuccessDrawer';
import UpgradeOptionsDrawer from './UpgradeOptionsDrawer';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTranslation } from 'react-i18next';

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function UpgradeDrawer(props: Props) {
    const { t } = useTranslation();
    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [loading,setLoading] = useState(false)
    const [loadingLevel,setLoadingLevel] = useState(false)
    const [openUpgradeOption, setOpenUpgradeOption] = useState(false);
    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }
    const [optionValue, setOptionValue] = useState<string | undefined>(undefined);
    const [optionId, setOptionId] = useState<string>('');
    const [openSuccess, setOpenSuccess] = useState(false);
    const router=useRouter();
    const dispatch=useDispatch();
    
    const setRanks = () => {
        SetRank(optionId,(res:any)=>{
            setLoading(false);
            if(res){
                router.push(res?.gateway_link)
                //setOpenSuccess(true)
            }

        })
      
    }
    const dir=useRtlLtr()

    const FetchRanksData=()=>{
        setLoadingLevel(true)
        GetRanks( (res: any) => {
            if (res) {
                dispatch(emptyDataRanks())
                dispatch(setDataRanks(res))
                setOpenUpgradeOption(!openUpgradeOption)
                setLoadingLevel(false)
            }
            
        })
    }

 

    return (
        <>


            <DrawerBottom isOpen={openM} changeOpen={change} height='250px' backgroundColor='transparent'>
                <div className="flex flex-col gap-y-2 mb-4 px-4 mt-2 text-center" dir={dir}>

                    <div className="w-full text-[var(--gray)]">
                        <b>     {t("upgradeStart")}   </b>
                    </div>
                    <div className='w-full my-4'>
                        {loadingLevel&&<Loader/>}
                        {!loadingLevel&&<button onClick={FetchRanksData} className='w-full bg-[var(--lightGrey)] h-[48px] rounded-[12px]'>
                            <div className="flex flex-row gap-x-1 p-[12px] ">
                                <div className='flex-grow text-right'>
                                    <p className='text-[var(--gray)] text-[14px] font-[500]'>{optionValue ?? t("chooseLevel")}</p>
                                </div>
                                <div><img src={ArrowDown.src} alt='btn-icon' /></div>
                            </div>
                        </button>}
                    </div>


                    <div className="flex flex-row w-full gap-x-2 ">
                        <div className=' basis-1/2'>
                            {optionValue == undefined ? <DisableBtn click={() => setOpenUpgradeOption(true)} text={t("confirm")} /> :
                                <DisableBtnLoadingBlue disabled={loading} loading={loading} click={() => setRanks() } text={t("confirm")} />}
                        </div>
                        <div className=' basis-1/2'>
                            <OrangLightBtn click={() => change(false)} text={t("cancel")} />
                        </div>

                    </div>

                </div>

            </DrawerBottom>

            {openUpgradeOption && <UpgradeOptionsDrawer
                ChangeValue={setOptionValue}
                setId={setOptionId}
                changeOpen={(value: boolean) => setOpenUpgradeOption(value)}
                isOpen={openUpgradeOption} />}
            {openSuccess && <SuccessDrawer
                text={
                    <>
                        <div className="flex flex-col justify-center items-center gap-y-3">
                            <div>
                                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[var(--blueColor)] to-[var(--blue)] '>{t("great")}!</p>
                            </div>
                            <div className=''>
                                <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[var(--blueColor)] to-[var(--blue)] '>
                                    {t("upgradeAccount")}
                                </p>
                            </div>

                        </div>
                    </>
                }
                changeOpen={(value: boolean) => setOpenSuccess(value)} isOpen={openSuccess} />}

        </>
    )
}
