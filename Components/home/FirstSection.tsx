import Car from '@/asset/img/car.png'
import ImgCart from '../html/ImgCart'
import Left from '@/asset/icon/left.svg'
import Music from '@/asset/img/music.png'
import Right from '@/asset/icon/right.svg'
import Slide from '@/asset/img/slide.png'

function FirstSection() {
    return (
        <div className='flex flex-row justify-between px-4'>
            <ImgCart
                key={1}
                img={Car.src}
                title='How to Drive a Car Safely'
                text='Ah, the joy of the open road—it’s a good feeling. 
                        But if you’re new to driving, you may feel a little nervous about getting behind the wheel. Don’t worry.
                         While it’s true that accidents can happen to anybody, 
                         there are things you can do to drive safely and do your best to avoid them.'
            />
            <ImgCart
                key={2}
                img={Music.src}
                title='How to Make Dance Music'
                text="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
            />
            <div className='relative'>
                <ImgCart
                    key={3}
                    width='w-full'
                    img={Slide.src}
                    title='Why I Stopped Using Multiple Monitor'
                    text="A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind, many of those studies are commissioned from monitor manufacturers like "
                />
                <div className='absolute bg-white rounded-[--radius] w-[40px] h-[40px] top-[45%] left-[2%] flex justify-center items-center'>
                    <img src={Left.src} alt="left" />
                </div>
                <div className='absolute bg-white rounded-[--radius] w-[40px] h-[40px] top-[45%] right-[2%] flex justify-center items-center'>
                    <img src={Right.src} alt="left" />
                </div>
            </div>

        </div>
    )
}

export default FirstSection