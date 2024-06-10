import LineGray from '../elements/line/LineGray'
import News from '../../../asset/img/news.png'
import React from 'react'
import SearchGray from '../elements/search/SearchGray'

export default function SearchNewsWin() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-row items-center">
        <LineGray />
        <div className="   mt-5 mb-3 flex justify-center">
            <h1 className='text-[var(--black) text-2xl]'><b className='mx-2'>اخبار</b></h1>
        </div>
        <LineGray />
    </div>

    <div className="flex flex-row gap-x-4 mb-5">
        <div className="basis-1/4 flex flex-col ">
            {/* <SearchGray /> */}
            <LineGray />
            <div><b className='text-xl'>با برنامه های بامداد آشنا شوید</b></div>
            <div className='mt-4'><span className="text-[var(--gray)]">جوایز روزنامه نگاری آنلاین</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">شتاب دهنده رهبری زنان</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">کنفرانس بامداد</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">روز مشاغل</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">برنامه های بیشتر</span></div>
            <LineGray />
            <div><b className='text-xl'>با برنامه های بامداد آشنا شوید</b></div>
            <div className='mt-4'><span className="text-[var(--gray)]">روز مشاغل</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">برنامه های بیشتر</span></div>
            <LineGray />
            <div><b className='text-xl'>با برنامه های بامداد آشنا شوید</b></div>
            <div className='mt-4'><span className="text-[var(--gray)]">جوایز روزنامه نگاری آنلاین</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">شتاب دهنده رهبری زنان</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">کنفرانس بامداد</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">روز مشاغل</span></div>
            <div className='mt-4'><span className="text-[var(--gray)]">برنامه های بیشتر</span></div>

        </div>
        <div className="flex-grow">
            {[1, 2, 3, 4, 5, 6].map(() => (
                <div className="bg-[var(--white)] rounded-2xl my-5">
                    <div className="container mx-auto w-[90%] py-4 flex flex-col">
                        <div><img className='w-full h-80' src={News.src} alt="news" /></div>
                        <div className="mt-3  p-5 w-[80%]">
                            <b className='text-[var(--black)] text-3xl'>چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم</b>
                        </div>
                        <div className="mt-3 w-[80%]">
                            <span className="text-[var(--gray)] text-2xl">درباره ائتلاف علیه خشونت آنلاین، آموزش ONA23 و تلاش های بیشتر در مورد ایمنی و امنیت بیاموزید</span>
                        </div>
                        <div className="mt-3 w-[80%]">
                            <span className="text-[var(--gray)] text-lg">
                                <span> توسط </span>
                                <span className='text-[var(--orang)]'>کری بلازینا </span>
                                <span> در 17 مه 2023</span>
                            </span>
                        </div>
                        <div className="container mx-auto w-full mt-5 flex flex-warp gap-x-4">
                            <div>
                                <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
                                    <span className={`text-[var(--blue)]`}>دایرکتوری کامل را ببینید</span>
                                </button>
                            </div>
                            <div>
                                <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
                                    <span className={`text-[var(--blue)]`}>غیر انتفاعی را ببینید </span>
                                </button>
                            </div>
                            <div>
                                <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
                                    <span className={`text-[var(--blue)]`}>ابزار ها را ببینید</span>
                                </button>

                            </div>
                            <div>
                                <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
                                    <span className={`text-[var(--blue)]`}>به رسانه ها مراجعه کنید </span>
                                </button>

                            </div>

                        </div>
                        <LineGray />
                        <div className="mt-3">
                            <span className="text-[var(--gray)]">
                                ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای انجام کارشان دفاع کند. ما خوشحالیم که یک … ادامه مطلب.
                            </span>
                        </div>
                        <div className="mt-3 ">
                            <span className="text-lg">
                                <b className="text-[var(--orang)] "> مطالعه کنید  </b >
                                <b className="text-[var(--orang)] "> &#8592;</b >
                            </span>
                        </div>

                        
                    </div>

                </div>
            ))
            }
        </div>
    </div>
</div>
  )
}
