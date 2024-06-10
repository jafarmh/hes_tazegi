import LogoBlue from '../../../asset/img/LogoBlue.png'
import React from 'react'
import SearchIcon from '../../../asset/img/search.svg'
import googlePlay from '../../../asset/img/googlePlay.png'
import instagram from '../../../asset/img/instagram.png'
import telegram from '../../../asset/img/telegram.png'
import twitch from '../../../asset/img/twitch.png'

export default function Footer() {
    return (
        <footer dir="rtl">
            <div className={`bg-[var(--blue)] w-full `}>
                <div className=' container mx-auto p-4'>
                    <div className={`w-full flex flex-row gap-x-2 items-center`}>
                        <img src={LogoBlue.src} alt='logo' />
                        <span><b className={`text-[var(--white)]  text-2xl`}>بامداد</b></span>
                    </div>
                    <div className="flex flex-row mt-10">
                        <div className={`text-[var(--white)] basis-1/4 md:basis-1/3 flex flex-col gap-y-5 `}>
                            <div><b className={`text-[var(--white)]  text-2xl`}>برنامه ها</b></div>
                            <div><small>درباره ما</small></div>
                            <div><small>ارتباط با ما</small></div>
                            <div><small>سوالات متداول</small></div>
                        </div>
                        <div className={`text-[var(--white)] basis-1/4 md:basis-1/3 flex flex-col gap-y-5 `}>
                            <div><b className={`text-[var(--white)]  text-2xl`}>کاوش کنید</b></div>
                            <div><small>درباره ما</small></div>
                            <div><small>ارتباط با ما</small></div>
                            <div><small>سوالات متداول</small></div>
                        </div>
                        <div className={`text-[var(--white)] basis-1/4 md:basis-1/3 flex flex-col gap-y-5 `}>
                            <div><b className={`text-[var(--white)]  text-2xl`}>جست و جو کردن </b></div>
                            <div className={`flex flex-row gap-x-2 bg-[var(--white)] p-3 rounded-xl w-[70%]`}>
                                <div><img src={SearchIcon.src} alt="search" /></div>
                                <div><input className='border-none focus:border-white outline-none bg-transparent' type="text" name="" id="" placeholder='جست و جو ...' /></div>
                            </div>
                            <div><b className={`text-[var(--white)]  text-base`}> ما را در شبکه های اجتماعی دنبال کنید </b></div>
                            <div className={`text-[var(--white)] flex flex-row gap-x-10 `}>
                                <div><img src={telegram.src} alt="telegram" /></div>
                                <div><img src={instagram.src} alt="instagram" /></div>
                                <div><img src={twitch.src} alt="twitch" /></div>
                                <div><img src={googlePlay.src} alt="googlePlay" /></div>

                            </div>
                        </div>

                    </div>
                    <div className={`w-full flex flex-row gap-x-2 items-center`}>
                        <small className={`text-[var(--white)] `}>@انجمن خبرآنلاین</small>
                    </div>
                    <div className={`w-full flex flex-row gap-x-10 items-center mt-4`}>
                        <div><span className={`text-[var(--lightBlue)] border-b-2 border-[var(--lightBlue)] text-lg`}>کد رفتار</span></div>
                        <div><span className={`text-[var(--lightBlue)] border-b-2 border-[var(--lightBlue)]  text-lg`}>سیاست بازگشت/بازپرداخت</span></div>
                        <div><span className={`text-[var(--lightBlue)] border-b-2 border-[var(--lightBlue)]  text-lg`}>سیاست حفظ حریم خصوصی انجمن خبر آنلاین</span></div>
                        <div><span className={`text-[var(--lightBlue)] border-b-2 border-[var(--lightBlue)]  text-lg`}>شرایط و ضوابط انجمن خبرآنلاین</span></div>
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}
