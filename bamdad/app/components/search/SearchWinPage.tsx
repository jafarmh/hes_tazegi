import CheckboxesGroup from '../elements/checkbox/CheckBox';
import Filter from './Filter';
import LineGray from '../elements/line/LineGray'
import RadioButtonsGroup from '../elements/radio/RadioFilterType';
import React from 'react'
import SearchGray from '../elements/search/SearchGray'
import SwitchE from '../elements/switch/Switch';

export default function SearchWinPage() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-row justify-end mt-5">
        <b className='text-[var(--orang)]'>تقویم کامل را ببینید</b>
    </div>
    <div className=" container mx-auto w-[70%]">

        <div className="flex flex-row items-center ">
            <LineGray />
            <div className="flex-grow  w-[25%] mt-5 mb-3 flex  ">
                <h1 className='text-[var(--black) text-[3xl]]'><b className='mx-2'>تقویم رخدادها</b></h1>
            </div>

            <LineGray />
        </div>

        <div className='text-center'>
            <p className='text-[var(--gray)]'>فرصت هایی برای جامعه ONA باز است</p>
        </div>

    </div>


    <div className="flex flex-row gap-x-4 mt-10 mb-5">
        <div className="basis-1/4 flex flex-col ">
          {/* <Filter/> */}
           
           
        </div>
        <div className="flex-grow">
            <div className="flex flex-row gap-x-16">
                <div><span className='tex-[var(--black)]'>همه</span></div>
                <div><span className='tex-[var(--gray)]'>جدید ترین</span></div>
                <div><span className='tex-[var(--gray)]'>قدیمی ترین</span></div>
                <div><span className='tex-[var(--gray)]'>عنوان</span></div>
                <div><span className='tex-[var(--gray)]'>عنوان</span></div>
                <div><span className='tex-[var(--gray)]'>عنوان</span></div>

            </div>
            {[1, 2, 3, 4, 5, 6].map(() => (
                <div className="bg-[var(--white)] rounded-2xl my-5">
                    <div className="flex flex-row gap-x-4 p-4">
                        <div className=" ">
                            <div className={`bg-[var(--lightOrang)] px-5 py-2 rounded-md flex flex-col gap-y-2`}>
                                <div><b className={`text-[var(--orang)]`}>15</b></div>
                                <div><span className={`text-[var(--gray)]`}>مهر</span></div>
                            </div>
                        </div>
                        <div className="container mx-auto w-[90%] py-4 flex flex-col">
                            <div className="flex flex-row">
                                <div className="flex-grow">
                                    <small className="text-[var(--gray)]">
                                        پنجشنبه، 15 ژوئن 2023 ساعت 3 بعد از ظهر تا 4:30 بعد از ظهر به وقت شرقی
                                    </small>
                                </div>
                                <div className="flex-none">
                                    <small className="text-[var(--orang)]">رویدادهای مجازی</small>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-y-2 mt-5`}>
                                <div><p className={`text-[var(--black)] text-2xl font-bold`}>سالن رهبران زنان اجرایی:حرکت های شغلی در رهبری اجرایی</p></div>
                                <div><small className={`text-[var(--blueColor)] font-bold`}>جهانی</small></div>

                            </div>

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
                </div>
            ))
            }
        </div>
    </div>
</div>
  )
}
