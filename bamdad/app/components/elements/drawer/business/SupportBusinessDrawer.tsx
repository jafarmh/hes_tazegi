import { GetAbout, GetFaq, GetPrivacies, GetTerm } from '@/app/redux/ApiCall/General'
import React, { useEffect, useState } from 'react'

import AboutBusinessDrawer from './AboutBusinessDrawer'
import ArrowSquare from '@/asset/img/arrow-square-left.png'
import { AttachProps } from '@/app/interface/Entity'
import Back from '@/asset/img/back.svg'
import ContactBusinessDrawer from './ContactBusinessDrawer'
import ContactUsListBusinessDrawer from './ContactUsListBusinessDrawer'
import DrawerBottom from '..'
import FaqBusinessDrawer from './FaqBusinessDrawer'
import PrivaciesBusinessDrawer from './PrivaciesBusinessDrawer'
import TermBusinessDrawer from './TermBusinessDrawer'
import useRtlLtr from '@/app/hooks/RtlLtr'
import { useTranslation } from 'react-i18next'

interface Props {
    isOpen: true | false,
    height?: string,
    changeOpen: Function,
    window?: () => Window;
}
export default function SupportBusinessDrawer(props: Props) {

    const { isOpen, changeOpen } = props
    const [openM, setOpenM] = useState(isOpen);
    const [openFaq, setOpenFaq] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const [openPrivacies, setOpenPrivacies] = useState(false);
    const [openContactUsList, setOpenContactUsList] = useState(false);
    const { t } = useTranslation();
    const [openTerm, setOpenTerm] = useState(false);
    const [DataAbout, setDataAbout] = useState('');
    const [DataAboutAttach, setDataAboutAttach] = useState<AttachProps[]>([]);
    const [DataTerm, setDataTerm] = useState('');
    const [DataFaq, setDataFaq] = useState([]);
    const [DataPrivacies, setDataPrivacies] = useState('');
    const [clicked, setClicked] = useState("")

    const change = (value: boolean) => {
        setOpenM(value)
        changeOpen(value)
    }

    useEffect(() => {
        if(!isOpen)
        return;
        GetAbout((res: any) => {
            if (res) {
                setDataAbout(res.text)
                setDataAboutAttach(res.attach);
            }
        })
        GetTerm((res: any) => {
            if (res) {
                setDataTerm(res.text)
            }
        })
        GetFaq((res: any) => {
            if (res) {
                setDataFaq(res)
            }
        })
        GetPrivacies((res: any) => {
            if (res) {
                setDataPrivacies(res.text)
            }
        })
        setClicked("");

    }, [isOpen])
    const dir = useRtlLtr()

    const RowItem = ({ click, txt }: { click: Function, txt: string }) => <>
        <div onClick={() => { setClicked(txt);click() }} className={`flex flex-row items-center gap-x-2 ${clicked===txt?"border border-[var(--lightBlue)] p-1 rounded-lg":""}`}>
            <div className='flex-grow'><b className='text-[var(--black)]' >{txt} </b></div>
            <div className='flex-none'><img src={ArrowSquare.src} alt="ArrowSquare" /></div>
        </div>
    </>

    return (
        <>
            <DrawerBottom isOpen={openM} changeOpen={change} height='420px'>
                <div className="flex flex-col gap-y-5 px-4 mt-5" dir={dir}>
                    <div className="flex flex-row justify-center items-center">
                        <div className='flex-grow'><b className='text-[var(--black)]' >{t("support")}</b></div>
                        <div onClick={() => change(false)} className='flex-none'><img src={Back.src} alt="back" /></div>
                    </div>

                    <div className="p-2   flex flex-col gap-y-8 text-xs">
                        <RowItem click={() => { setOpenFaq(true) }} txt={t("faq")} />
                        <RowItem click={() => { setOpenAbout(true) }} txt={t("aboutUs")} />
                        <RowItem click={() => { setOpenTerm(true) }} txt={t("term")} />
                        <RowItem click={() => { setOpenPrivacies(true) }} txt={t("Privacies")} />
                        <RowItem click={() => { setOpenContact(true) }} txt={t("contactUs")} />
                        <RowItem click={() => { setOpenContactUsList(true) }} txt={t("contactUsList")} />
                    </div>

                </div>

            </DrawerBottom>

            {openFaq && <FaqBusinessDrawer data={DataFaq} changeOpen={(value: boolean) => setOpenFaq(value)} isOpen={openFaq} />}
            {openContact && <ContactBusinessDrawer changeOpen={(value: boolean) => setOpenContact(value)} isOpen={openContact} />}
            {openAbout && <AboutBusinessDrawer attach={DataAboutAttach} data={DataAbout} changeOpen={(value: boolean) => setOpenAbout(value)} isOpen={openAbout} />}
            {openTerm && <TermBusinessDrawer data={DataTerm} changeOpen={(value: boolean) => setOpenTerm(value)} isOpen={openTerm} />}
            {openPrivacies && <PrivaciesBusinessDrawer data={DataPrivacies} changeOpen={(value: boolean) => setOpenPrivacies(value)} isOpen={openPrivacies} />}
            {openContactUsList && <ContactUsListBusinessDrawer changeOpen={(value: boolean) => setOpenContactUsList(value)} isOpen={openContactUsList} />}


        </>
    )
}
