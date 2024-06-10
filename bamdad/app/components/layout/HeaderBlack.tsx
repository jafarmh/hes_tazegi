import ArrowDown from '../../../asset/img/arrow-down.svg'
import Logo from '../../../asset/img/Logo.png'
import Logout from '../../../asset/img/logout.png'
import Primary from '../../../asset/img/arrowRight.png'

export default function HeaderBlack(){

    return <>
     <header>
        <div className="flex flex-col ">
          <div className="  w-full">
            <div className="bg-[#262626] flex h-20 items-center ">
              <div className="flex-none m-20 flex gap-x-2">
                <div>
                  <img src={Logo.src} alt="logo" />
                </div>
                <div>
                  <p className='text-[#E6E6E6] text-[27.03px] font-[700]'>بامداد</p>
                </div>
              </div>
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
                <div >
                  <button className='bg-[#FE590A] h-[48px] rounded-[12px]'>
                    <div className="flex gap-x-1 p-[12px] ">
                      <div><p className='text-[#FEE3D5] text-[14px] font-[500]'>فارسی</p></div>
                      <div><img src={ArrowDown.src} alt='btn-icon' /></div>
                    </div>
                  </button>
                </div>
                <div>
                  <img src={Primary.src} alt="btn1" />
                </div>


              </div>
            </div>

            <div  >

              <div className="flex h-20 gap-x-[40px] w-full items-center ms-32">
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>اخبار</p></div>
                <div><p className='text-[#262626] text-[18px] font-[300]'>رویداد ها</p></div>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>چند رسانه ای</p></div>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>بامداد مگ</p></div>
                <div><p className='text-[#8C8C8C] text-[18px] font-[300]'>درباره ما</p></div>


              </div>
            </div>
          </div>
        </div>
      </header>
      </>
}