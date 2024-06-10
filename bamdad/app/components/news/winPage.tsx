import ArrowDown from '../../../asset/img/arrowSquareDown.svg'
import Down from '../../../asset/img/arrowDownCircle.svg'
import Image10 from '../../../asset/img/image10.png'
import Image11 from '../../../asset/img/image11.png'
import Image12 from '../../../asset/img/image12.png'
import Image13 from '../../../asset/img/image13.png'
import Image14 from '../../../asset/img/image14.png'
import Image15 from '../../../asset/img/image15.png'
import Image16 from '../../../asset/img/image16.png'
import React from 'react'
import SearchIcon from '../../../asset/img/search.svg'
import TwoOrangBtn from './TwoOrangBtn'

export default function WinPage() {
  return (
    <div className="container mx-auto">

    <div className="flex flex-row">
      <div className="flex-grow">
        <div className="flex flex-row gap-x-2">
          <div><img src={Down.src} alt='arrow down'></img></div>
          <div><span className='text-[var(--gray)]'>منابع</span></div>
        </div>
      </div>
      <div className="flex flex-row gap-x-4">
        <div>
          <button className=' h-[48px] rounded-[12px]'>
            <div className="flex gap-x-1 p-[12px] ">
              <div><p className='text-[var(--gray)] text-[14px] font-[500]'>مناسبت ها</p></div>
              <div><img src={ArrowDown.src} alt='btn-icon' /></div>
            </div>
          </button>
        </div>
        <div>
          <button className=' h-[48px] rounded-[12px]'>
            <div className="flex gap-x-1 p-[12px] ">
              <div><p className='text-[var(--gray)] text-[14px] font-[500]'>موضوعات</p></div>
              <div><img src={ArrowDown.src} alt='btn-icon' /></div>
            </div>
          </button>
        </div>

      </div>
    </div>

    <div className="flex flex-col justify-center items-center w-full">
      <div className='w-[50%]' >
        <div className={`flex flex-row gap-x-2 bg-[var(--lightGray)] p-3 rounded-xl`}>
          <div><img src={SearchIcon.src} alt="search" /></div>
          <div><input className='border-none focus:border-white outline-none bg-transparent' type="text" name="" id="" placeholder='جستجو ...' /></div>
        </div>
      </div>
      <div>
        <div className="container mx-auto  mt-5 flex flex-warp gap-x-4">
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
      </div>
    </div>

    <div className="bg-[var(--white)] rounded-md flex flex-col mt-20 p-5 mb-5">
      <div className="flex flex-row">
        <div className='flex-grow'><b className='text-2xl'>اخبار</b></div>
        <div className='flex-none'>
          <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
            <span className={`text-[var(--blue)]`}>جستجو</span>
          </button>
        </div>
      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5 gap-x-4">
        <div className="basis-1/4 flex-col">
          <div><img src={Image10.src} alt="img10" /></div>
          <div className="mt-3  p-5 w-[80%]">
            <b className='text-[var(--black)]'>چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم</b>
          </div>
          <div className="mt-3 w-[90%]">
            <span className='text-[var(--gray)]'>
              این کتاب راهنمای اطلاعات نادرست COVID-19 به‌روزرسانی شده از انجمن اخبار آنلاین برای کمک به روزنامه‌نگاران و اتاق‌های خبر طراحی شده است...
            </span>
          </div>
          <div className="flex flex-warp mt-5 gap-x-4">
            <TwoOrangBtn />
          </div>
          <div className="  w-full mt-5 mb-3 flex justify-center">
            <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
          </div>
          <div className="mt-3  p-5 w-[80%]">
            <b className='text-[var(--black)]'>کتاب راهنمای اطلاعات نادرست COVID-19</b>
          </div>
          <div className="mt-3 w-[90%]">
            <span className='text-[var(--gray)]'>
              این کتاب راهنمای اطلاعات نادرست COVID-19 به‌روزرسانی شده از انجمن اخبار آنلاین برای کمک به روزنامه‌نگاران و اتاق‌های خبر طراحی شده است...                  </span>
          </div>
          <div className="flex flex-warp mt-5 gap-x-4">
            <TwoOrangBtn />
          </div>
        </div>
        <div className=" flex-grow flex-col w-[80%]">
          <div><img className='w-full ' src={Image11.src} alt="img11" /></div>
          <div className="mt-3   w-full">
            <h1><b className='text-[var(--black)] text-3xl'>چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم</b></h1>
          </div>
          <div className="mt-2 w-full">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className='mt-2 w-[90%]'>
            <span className="text-[var(--gray)">روزنامه نگاران امروز با چالش های اطلاعات نادرست و اطلاعات نادرست و همچنین کاهش اعتماد عمومی به نهادها مواجه هستند. آنها در حال مبارزه با تاکتیک های آشکار برای به اشتراک گذاشتن اطلاعات نادرست و به کارگیری استراتژی هایی برای جلوگیری از انتشار اطلاعات نادرست هستند. در میان همه این چالش ها، روزنامه نگاران چگونه توانسته اند به طور موثر با مخاطبان خود اعتماد ایجاد کنند؟ آیا ما در مورد اطلاعات غلط و ...</span>
          </div>
          <div className="flex flex-warp mt-5 gap-x-4">
            <TwoOrangBtn />
          </div>
        </div>


      </div>

    </div>

    <div className="bg-[var(--white)] rounded-md flex flex-col mt-20 p-5 mb-5">
      <div className="flex flex-row">
        <div className='flex-grow'><b className='text-2xl'>تعامل و تجزیه و تحلیل خواننده</b></div>
        <div className='flex-none'>
          <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
            <span className={`text-[var(--blue)]`}>منابع مشارکت بیشتر</span>
          </button>
        </div>
      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>
    </div>



    <div className="bg-[var(--white)] rounded-md flex flex-col mt-20 p-5 mb-5">
      <div className="flex flex-row">
        <div className='flex-grow'><b className='text-2xl'> جلسات ویژه کنفرانس </b></div>
        <div className='flex-none'>
          <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
            <span className={`text-[var(--blue)]`}>گفتگوهای ویژه بیشتر</span>
          </button>
        </div>
      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image13.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image13.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image13.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>
    </div>




    <div className="bg-[var(--white)] rounded-md flex flex-col mt-20 p-5 mb-5">
      <div className="flex flex-row">
        <div className='flex-grow'><b className='text-2xl'>گزارش نویسی </b></div>
        <div className='flex-none'>
          <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
            <span className={`text-[var(--blue)]`}>نکات گزارش دهی بیشتر</span>
          </button>
        </div>
      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>
    </div>



    <div className="bg-[var(--white)] rounded-md flex flex-col mt-20 p-5 mb-5">
      <div className="flex flex-row">
        <div className='flex-grow'><b className='text-2xl'>فرهنگ و شغل </b></div>
        <div className='flex-none'>
          <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
            <span className={`text-[var(--blue)]`}>مشاوره شغلی بیشتر</span>
          </button>
        </div>
      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image14.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image14.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image14.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>
    </div>


    <div className="bg-[var(--white)] rounded-md flex flex-col mt-20 p-5 mb-5">
      <div className="flex flex-row gap-x-4">
        <div className='flex-grow'><b className='text-2xl'>آخرین منابع </b></div>
        <div className="flex-grow flex flex-row gap-x-4 justify-end items-center">
          <div>
            <span className='tex-[--var(gray)]'>محدود شده توسط:</span>
          </div>
          <div>
            <button className='bg-[var(--lightGrey)] h-[48px] rounded-[12px]'>
              <div className="flex gap-x-1 p-[12px] ">
                <div><p className='text-[var(--gray)] text-[14px] font-[500]'> مردم</p></div>
                <div><img src={ArrowDown.src} alt='btn-icon' /></div>
              </div>
            </button>
          </div>
          <div>
            <button className='bg-[var(--lightGrey)] h-[48px] rounded-[12px]'>
              <div className="flex gap-x-1 p-[12px] ">
                <div><p className='text-[var(--gray)] text-[14px] font-[500]'>موضوعات</p></div>
                <div><img src={ArrowDown.src} alt='btn-icon' /></div>
              </div>
            </button>
          </div>

        </div>
        <div className='flex-none'>
          <button className={`bg-[var(--lightBlue)] h-[48px] rounded-[12px] px-4`}>
            <span className={`text-[var(--blue)]`}>همه منابع</span>
          </button>
        </div>
      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image15.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image15.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image15.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image16.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image16.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image16.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>

      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-full bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>
      <div className="flex flex-row mt-5   w-full justify-between">
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">سندیکای بدون اشک: بهترین شیوه ها در یک جهان توزیع شده</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">خبرنامه به عنوان محصول و روزنامه نگاری</b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>
        <div className="w-[33%] flex-col relative">
          <div>
            <img src={Image12.src} alt="Image12" />
            <div className="absolute w-[352px] flex justify-end py-2.5 top-[-9px] right-0 ">
              <p className="bg-[var(--blue)] text-white text-[1em] font-[500] p-2  text-right  w-20 rounded-md">
                بامداد 22
              </p>
            </div>
          </div>
          <div className='w-[60%]'><b className="text-2xl">چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم </b></div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">جوی مایر // نوربرت شوارتز // گابریلا استرن // مدیریت مینا // تیروونگادام</span>
          </div>
          <div className="mt-2 w-[80%]">
            <span className="text-[var(--gray)]">در دنیای پسااجتماعی، دستیابی به خوانندگان جدید در پلتفرم‌های خبری، ابزاری ضروری برای افزایش مخاطب و درآمد است. این جلسه آرشیو شده از ONA22 از دنیای واقعی استفاده می کند...</span>
          </div>
          <div className='flex flex-row gap-x-4'><TwoOrangBtn /></div>
        </div>




      </div>
      
    </div>

  </div>
  )
}
