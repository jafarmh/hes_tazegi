import ArrowDown from '../../../asset/img/arrow-down.svg'
import Logo from '../../../asset/img/Logo.png'
import Logout from '../../../asset/img/logout.png'
import Primary from '../../../asset/img/arrowRight.png'
import search from '../../../asset/img/search.svg'
import useRtlLtr from '@/app/hooks/RtlLtr'

export default function HeaderWhite() {
  const dir=useRtlLtr()

  return <>
    <header dir={dir}>
      <div className="flex flex-col ">
        <div className="  w-full">
          <div className="bg-[#262626] flex h-10 items-center ">

            <div className="grow  "></div>
            <div className="flex-none m-20 flex gap-x-3 ">
              <div className='flex gap-x-2 items-center m-2'>
                <div>
                  <p className="text-[#55D4EB] text-[14px] font-[500]">
                    ورود به وب اپلیکیشن بامداد
                  </p>
                </div>
                <div>
                  <img src={Logout.src} alt='app-login' />
                </div>

              </div>



            </div>
          </div>

          <div className='w-full'>

            <div className="bg-[#FAFAFA] flex h-20 gap-x-[10px] w-full items-center justify-between ">
              <div className="flex-none  flex gap-x-2 mx-20">
                <div>
                  <img src={Logo.src} alt="logo" />
                </div>
                <div>
                  <p className='text-[#1E1E1E] text-[27.03px] font-[700]'>بامداد</p>
                </div>
              </div>
              <div className='grow flex gap-x-10 mx-10'>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>اخبار</p></div>
                <div><p className='text-[#262626] text-[18px] font-[300]'>رویداد ها</p></div>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>چند رسانه ای</p></div>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>بامداد مگ</p></div>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>درباره ما</p></div>
              </div>
              <div className='flex-none flex gap-x-2 mx-20'>
                <div >
                  <button className='bg-[#FE590A] h-[48px] rounded-[12px]'>
                    <div className="flex gap-x-1 p-[12px] ">
                      <div><p className='text-[#FEE3D5] text-[14px] font-[500]'>فارسی</p></div>
                      <div><img src={ArrowDown.src} alt='btn-icon' /></div>
                    </div>
                  </button>
                </div>
                <div>
                  <button className={`bg-[var(--blueColor)] h-[48px] rounded-[12px]`}>
                    <div className="flex gap-x-1 p-[12px] ">
                     
                      <div><img src={search.src} alt='btn-search' /></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
}