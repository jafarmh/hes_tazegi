import BBC from "../../../asset/img/BBC.png";
import CNBC from "../../../asset/img/CNBC.png";
import CNN from "../../../asset/img/CNN.png";
import FOX from "../../../asset/img/FOX.png";
import Frame2 from "../../../asset/img/Frame2.png";
import Icon1 from "../../../asset/img/icon1.svg";
import Icon2 from "../../../asset/img/icon2.svg";
import Icon3 from "../../../asset/img/icon3.svg";
import MSN from "../../../asset/img/MSN.png";
import News from "../../../asset/img/news.png";
import React from 'react'
import Rectangle3 from "../../../asset/img/Rectangle3.png";
import Rectangle4 from "../../../asset/img/Rectangle4.png";
import Rectangle5 from "../../../asset/img/Rectangle5.png";
import Swiper from "../elements/swiper/Swiper";
import USA from "../../../asset/img/USA.png";

export default function HomeWin() {
  return (
    <div className=" w-full flex flex-col">
    {/* banner */}
    <section>
      <div className="w-full">
        <img className="w-full" src={Frame2.src} alt="" />
      </div>
    </section>
    {/* banner */}
    <section>
      <div className=" w-full bg-[#F5F5F5] text-center h-32 flex justify-center items-center  ">
        <div className=" w-[45rem]  leading-[32px] text-[20px]">
          <strong>انجمن اخبار آنلاین </strong>
          <span className="text-[#404040]">
            یک سازمان غیرانتفاعی عضویت برای روزنامه نگاران دیجیتال است - ارتباط روزنامه نگاری، فناوری و نوآوری
          </span>

          <sub className="text-[#FE590A] text-[12px]"> مطالعه کنید  </sub >
          <sub className="text-[#FE590A] text-[12px]"> &#8592;</sub >


        </div>
      </div>
    </section>
    {/* info */}

    <div className="container mx-auto w-[80%] mt-20">
      <section>
        <div className="flex flex-row ">
          <div className="basis-1/2 h-14">
            <div className="flex flex-row gap-x-2">
              <div className="basis-1/2 ">
                <img className="h-[100%]" src={Rectangle3.src} alt="rect3" />
              </div>
              <div className="basis-1/3 flex flex-col gap-y-2">
                <div><img className="h-[100%]" src={Rectangle4.src} alt="" /></div>
                <div><img className="h-[100%]" src={Rectangle5.src} alt="" /></div>

              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col ms-28 me-28">
            <div className="mb-10">
              <p className="text-[#000000] font-bold text-[2em]">
                لورم ایپسوم متن ساختگی
                با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
            <div>
              <p className="text-[#666666] text-[1em]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                و برای شرایط فعلی تکنولوژی مورد نیاز،
                و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                شناخت فراوان جامعه و متخصصان را می طلبد،
                تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                ای علی الخصوص طراحان خلاقی،
                و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                <span className={`text-[var(--orang)]`}>
                  طراحان رایانه ای علی الخصوص طراحان خلاقی،
                  و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </span>
              </p>

            </div>
          </div>

        </div>
      </section>

    </div>


    <div className="w-[30%] container mx-auto mt-24">
      <div className={`bg-[var(--lineGray)] h-[.1em]`}></div>
    </div>

    <div className="container mx-auto w-[80%] mt-20 mb-10">
      <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={Icon3.src} /></div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[2em] font-[700]   text-center w-[228px]">

              ثبت نام ONA 23 باز است
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              برای دریافت مجوز کنفرانس سالانه ما تا 7 ژوئن ثبت نام کنید تا بهترین قیمت را دریافت کنید. اعضای ONA حتی بیشتر پس انداز می کنند!
            </p>
          </div>
          <div className="flex justify-center">
            <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>  برنامه را کاوش کنید </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={Icon2.src} /></div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[2em] font-[700]   text-center w-[228px]">

              ثبت نام ONA 23 باز است
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[300px]`}>
              برای دریافت مجوز کنفرانس سالانه ما تا 7 ژوئن ثبت نام کنید تا بهترین قیمت را دریافت کنید. اعضای ONA حتی بیشتر پس انداز می کنند!
            </p>
          </div>
          <div className="flex justify-center">
            <button className={`bg-[var(--orang)]  h-[48px] rounded-[12px] px-4`}> <span className={`text-[var(--white)]`}>برنامه را کاوش کنید</span></button>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={Icon1.src} /></div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[2em] font-[700]   text-center w-[228px]">

              ثبت نام ONA 23 باز است
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[300px]`}>
              برای دریافت مجوز کنفرانس سالانه ما تا 7 ژوئن ثبت نام کنید تا بهترین قیمت را دریافت کنید. اعضای ONA حتی بیشتر پس انداز می کنند!
            </p>
          </div>
          <div className="flex justify-center">
            <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>  برنامه را کاوش کنید </button>
          </div>
        </div>


      </div>
    </div>


    <div className=" bg-[#063C8F] h-[284px] w-full mt-20 mb-10 ">
      <div className="h-[100%] flex flex-col gap-y-3   justify-center">
        <div className="text-center  ">
          <p className={`text-[var(--white)] font-[700] text-2xl`}>مشترک شدن در هفته نامه بامداد</p>
        </div>
        <div className="flex flex-row gap-x-4 justify-center items-center	w-full">
          <div className="  ">
            <input className="w-[332px] h-[48px] rounded-[12px] px-4" type="text" placeholder="ایمیل خود را در اینجا ارائه دهید ..." name="" id="" />
          </div>
          <div className="">
            <button className={`bg-[var(--orang)] h-[48px] rounded-[12px] px-4`}> ارسال </button>

          </div>
        </div>
        <div className="w-[20%] container mx-auto mt-4">
          <div className={`bg-[var(--blueColor)] h-[.1em]`}></div>
        </div>
        <div className="text-center">
          <p className={`text-[var(--blueColor)] font-[700] font[2rem]`}> شماره های گذشته خبرنامه را بخوانید </p>
        </div>
      </div>
    </div>

    <div className="  w-full mt-5 text-center">
      <h1 className={`text-[var(--orang)] font-[700]  text-[1.8em]`}> تشکر ویژه از حامیان بامداد</h1>
    </div>

    <div className="container mx-auto  mt-5 w-[70%] flex flex-warp gap-x-20">
      <div><img src={FOX.src} alt="Fox" /></div>
      <div><img src={USA.src} alt="Fox" /></div>
      <div><img src={FOX.src} alt="Fox" /></div>
      <div><img src={CNBC.src} alt="Fox" /></div>
      <div><img src={MSN.src} alt="Fox" /></div>
      <div><img src={BBC.src} alt="Fox" /></div>
      <div><img src={FOX.src} alt="Fox" /></div>
      <div><img src={CNN.src} alt="Fox" /></div>

    </div>

    <div className="  w-full mt-5 text-center">
      <h1 className={`text-[var(--black)] font-[700]  text-[1.8em]`}>اخبار اخیر</h1>
    </div>
    <div className="  w-full mt-5 mb-3 flex justify-center">
      <div className={`w-[20%] bg-[var(--lineGray)] h-[.1em]`}></div>
    </div>

    <div className="container mx-auto w-[90%] mt-20 mb-10">
      <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={News.src} /></div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[1.3em] font-[700]   text-right w-[320px]">

              چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای  …انجام کارشان دفاع کند. ما خوشحالیم که یک                </p>
          </div>

        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={News.src} /></div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[1.3em] font-[700]   text-right w-[320px]">

              چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای  …انجام کارشان دفاع کند. ما خوشحالیم که یک                </p>
          </div>

        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={News.src} /></div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[1.3em] font-[700]   text-right w-[320px]">

              چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای  …انجام کارشان دفاع کند. ما خوشحالیم که یک
            </p>
          </div>

        </div>


      </div>
    </div>

    <div className="  w-full mt-5 text-center">
      <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
        <span className={`text-[var(--orang)]`}>به روز رسانی های بیشتر از بامداد</span>
      </button>

    </div>


    <div className={`bg-[var(--lightBlue)] h-[350px] w-full mt-20 mb-10 `}>
      <div className="h-[100%] flex flex-col gap-y-3   justify-center">
        <div className="text-center  ">
          <p className={`text-[var(--blue)] font-[700] text-2xl`}>مرکز شغلی بامداد</p>
        </div>
        <div className="  w-full mt-1 mb-3 flex justify-center">
          <div className={`w-[15%] bg-[#063C8F] h-[.01em]`}></div>
        </div>
        <div className="flex flex-row gap-x-4 justify-center items-center	w-full">
          <div className=" grid grid-flow-col justify-stretch gap-x-4 ">
            <div className={`bg-[var(--white)] rounded-md	 p-5 flex flex-col gap-y-4`}>
              <div><p className={`text-[var(--blue)] font-bold`}>مدیر عامل استاکتون سیمفونی</p></div>
              <div><p className={`text-[var(--gray)] text-sm	`}>بوفالو نیوز / خورشید هامبورگ</p></div>
              <div><p className={`text-[var(--gray)] text-xs text-left`}>ارسال شده در 24 می</p></div>

            </div>
            <div className={`bg-[var(--white)] rounded-md	 p-5 flex flex-col gap-y-4`}>
              <div><p className={`text-[var(--blue)] font-bold`}>مدیر عامل استاکتون سیمفونی</p></div>
              <div><p className={`text-[var(--gray)] text-sm	`}>بوفالو نیوز / خورشید هامبورگ</p></div>
              <div><p className={`text-[var(--gray)] text-xs text-left`}>ارسال شده در 24 می</p></div>

            </div>
            <div className={`bg-[var(--white)] rounded-md	 p-5 flex flex-col gap-y-4`}>
              <div><p className={`text-[var(--blue)] font-bold`}>مدیر عامل استاکتون سیمفونی</p></div>
              <div><p className={`text-[var(--gray)] text-sm	`}>بوفالو نیوز / خورشید هامبورگ</p></div>
              <div><p className={`text-[var(--gray)] text-xs text-left`}>ارسال شده در 24 می</p></div>

            </div>
            <div className={`bg-[var(--white)] rounded-md	 p-5 flex flex-col gap-y-4`}>
              <div><p className={`text-[var(--blue)] font-bold`}>مدیر عامل استاکتون سیمفونی</p></div>
              <div><p className={`text-[var(--gray)] text-sm	`}>بوفالو نیوز / خورشید هامبورگ</p></div>
              <div><p className={`text-[var(--gray)] text-xs text-left`}>ارسال شده در 24 می</p></div>

            </div>
          </div>

        </div>
        <div className="flex justify-center">
          <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>  مرکز شغلی را کاوش کنید </button>
        </div>

      </div>
    </div>


    <div className="container w-[54%] mx-auto">
      <div className="  w-full mt-5 text-center">
        <h1 className={`text-[var(--black)] font-[700]  text-[1.8em]`}>دایرکتوری صنعتی</h1>
      </div>
      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-[20%] bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>

      <div className={`w-full text-center `}>
        <p className={`text-[var(--gray)]}`}>
          برنامه های ONA توسط مجموعه ای از بنیادها و رهبران برتر در روزنامه نگاری و فناوری پشتیبانی می شود. پایگاه داده را کاوش کنید و ابزارهای جدید، فرصت های آموزشی، شرکای بالقوه و موارد دیگر را کشف خواهید کرد.
        </p>
      </div>
    </div>

    <div className="container mx-auto  w-[70%] mt-5 mb-5 ">
      <Swiper />
    </div>


    <div className="container mx-auto  w-[70%] mt-5 mb-5 ">
      <Swiper />
    </div>

    <div className="container mx-auto w-[40%] mt-5 flex flex-warp gap-x-4">
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>دایرکتوری کامل را ببینید</span>
        </button>
      </div>
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>غیر انتفاعی را ببینید </span>
        </button>
      </div>
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>ابزار ها را ببینید</span>
        </button>

      </div>
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>به رسانه ها مراجعه کنید </span>
        </button>

      </div>

    </div>

    <div className=" bg-[#063C8F] h-[284px] w-full mt-20 mb-10 ">
      <div className="h-[100%] flex flex-col gap-y-3   justify-center">
        <div className="text-center  ">
          <p className={`text-[var(--white)] font-[700] text-2xl`}>با عضو شدن از بامداد حمایت کنید</p>
        </div>

        <div className="w-[20%] container mx-auto mt-1">
          <div className={`bg-[var(--blueColor)] h-[.1em]`}></div>
        </div>
        <div className="flex justify-center text-center">
          <p className={`text-[var(--lightGray)]  w-[60%]  `}>
            برنامه های ONA توسط مجموعه ای از بنیادها و رهبران برتر در روزنامه نگاری و فناوری پشتیبانی می شود. پایگاه داده را کاوش کنید و ابزارهای جدید، فرصت های آموزشی، شرکای بالقوه و موارد دیگر را کشف خواهید کرد.
          </p>
        </div>
        <div className="flex justify-center">
          <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>  کسب اطلاعات بیشتر درباره عضویت </button>
        </div>
      </div>
    </div>

    <div className="container w-[54%] mx-auto">
      <div className="  w-full mt-5 text-center">
        <h1 className={`text-[var(--black)] font-[700]  text-[1.8em]`}> جوامع </h1>
      </div>
      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-[20%] bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>

      <div className={`w-full text-center `}>
        <p className={`text-[var(--gray)]}`}>
          ما از طریق برنامه‌های متمرکز بر آموزش نوآوری، شبکه‌سازی و ایجاد جامعه، توسعه رهبری، تنوع و گنجاندن در اتاق‌های خبر، پیش‌بینی روندها و ارج نهادن به برتری، به اعضای خود و جامعه روزنامه‌نگاری گسترده‌تر دسترسی پیدا می‌کنیم. یاد بگیرید که چگونه می توانید درگیر شوید.
        </p>
      </div>
    </div>

    <div className="container mx-auto w-[90%] mt-20 mb-10">
      <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-2">
        {[0, 1, 2].map(() => (
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-center relative">
              <img src={News.src} />
              <div className="absolute w-full py-2.5 top-0 right-28  text-right ">
                <p className="text-white text-[1em] font-[500]   text-right w-[60%]">
                  چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto w-[80%] mt-5 flex flex-warp gap-x-10 justify-center">
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>دایرکتوری کامل را ببینید</span>
        </button>
      </div>
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>غیر انتفاعی را ببینید </span>
        </button>
      </div>
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>ابزار ها را ببینید</span>
        </button>

      </div>
      <div>
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>به رسانه ها مراجعه کنید </span>
        </button>

      </div>

    </div>

    <div className="container w-[90%] mx-auto mt-20">
      <div className="  w-full mt-5 text-center">
        <h1 className={`text-[var(--black)] font-[700]  text-[1.8em]`}> منابع ویژه </h1>
      </div>
      <div className="  w-full mt-5 mb-3 flex justify-center">
        <div className={`w-[20%] bg-[var(--lineGray)] h-[.1em]`}></div>
      </div>

      <div className="grid grid-flow-col auto-cols-[minmax(0,_2fr)] gap-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={News.src} /></div>
          <div className="flex justify-center">
            <p className={`text-[var(--orang)] font-[500] text-[1.2em]`}> بامداد </p>

          </div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[1.3em] font-[700]   text-right w-[320px]">

              چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای  …انجام کارشان دفاع کند. ما خوشحالیم که یک                </p>
          </div>

        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={News.src} /></div>
          <div className="flex justify-center">
            <p className={`text-[var(--orang)] font-[500] text-[1.2em]`}> بامداد </p>

          </div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[1.3em] font-[700]   text-right w-[320px]">

              چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای  …انجام کارشان دفاع کند. ما خوشحالیم که یک                </p>
          </div>

        </div>

        <div className="flex flex-col gap-y-2">
          <div className="flex justify-center"><img src={News.src} /></div>
          <div className="flex justify-center">
            <p className={`text-[var(--orang)] font-[500] text-[1.2em]`}> بامداد </p>

          </div>
          <div className="flex justify-center">
            <p className="text-[#262626] text-[1.3em] font-[700]   text-right w-[320px]">

              چگونه از امنیت روزنامه نگاران و آزادی مطبوعات حمایت می کنیم
            </p>
          </div>
          <div className="flex justify-center">
            <p className={`text-[var(--gray)] text-[1em] w-[340px]`}>
              ONA با مدافعان آزادی مطبوعات، کارشناسان حقوق رسانه ها و سایر سازمان های روزنامه نگاری همکاری می کند تا از آزادی بیان و حق روزنامه نگاران برای  …انجام کارشان دفاع کند. ما خوشحالیم که یک
            </p>
          </div>

        </div>


      </div>
      <div className="  w-full mt-5 text-center">
        <button className={`bg-[var(--lightOrang)] h-[48px] rounded-[12px] px-4`}>
          <span className={`text-[var(--orang)]`}>تمام منابع را کاوش کنید</span>
        </button>

      </div>
    </div>




    <div className={`bg-[var(--lightBlue)]   w-full mt-20 `}>
      <div className="h-[100%] pt-5 flex flex-col gap-y-3   justify-center">
        <div className="text-center  ">
          <p className={`text-[var(--blue)] font-[700] text-2xl`}>رویداد های آینده</p>
        </div>
        <div className="  w-full mt-1 mb-3 flex justify-center">
          <div className={`w-[15%] bg-[#063C8F] h-[.01em]`}></div>
        </div>
        <div className=" w-full  text-center h-32 flex justify-center items-center  ">
          <div className=" w-[45rem]  leading-[32px] text-[20px]">
            <strong>انجمن اخبار آنلاین </strong>
            <span className="text-[#404040]">
              یک سازمان غیرانتفاعی عضویت برای روزنامه نگاران دیجیتال است - ارتباط روزنامه نگاری، فناوری و نوآوری
            </span>

            <sub className={`text-[var(--blue)] text-[12px]`}> <b>مطالعه کنید </b> </sub >
            <sub className={`text-[var(--blue)] text-[12px]`}> &#8592;</sub >


          </div>
        </div>


        <div className="flex flex-row gap-x-4 justify-center items-center	w-full mt-5 mb-5">
          <div className=" grid grid-flow-col justify-stretch gap-x-4 ">
            {[0, 1, 2].map(() => (
              <div className={`flex flex-row gap-x-2 items-center bg-[var(--white)] rounded-md	 p-5`}>
                <div className={`bg-[var(--lightOrang)] px-5 py-2 rounded-md flex flex-col gap-y-2`}>
                  <div><b className={`text-[var(--orang)]`}>15</b></div>
                  <div><span className={`text-[var(--gray)]`}>مهر</span></div>
                </div>
                <div className={`flex flex-col gap-y-2`}>
                  <div><p className={`text-[var(--blue)] font-bold`}>سالن رهبران زنان اجرایی:</p></div>
                  <div><p className={`text-[var(--blue)] font-bold`}>حرکت های شغلی در رهبری اجرایی:</p></div>
                  <div><small className={`text-[var(--blueColor)]`}><b>جهانی</b></small></div>

                </div>
              </div>
            ))}




          </div>
        </div>
        <div className="container mx-auto w-[40%] mt-5 mb-5 flex flex-warp gap-x-4">
          <div>
            <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>
              <b className={`text-[var(--blue)]`}>دایرکتوری کامل را ببینید</b>
            </button>
          </div>
          <div>
            <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>
              <b className={`text-[var(--blue)]`}>غیر انتفاعی را ببینید </b>
            </button>
          </div>
          <div>
            <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>
              <b className={`text-[var(--blue)]`}>ابزار ها را ببینید</b>
            </button>

          </div>
          <div>
            <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px] px-4`}>
              <b className={`text-[var(--blue)]`}>مرکز شغلی را کاوش کنید </b>
            </button>

          </div>

        </div>

      </div>


    </div>



  </div>
  )
}
