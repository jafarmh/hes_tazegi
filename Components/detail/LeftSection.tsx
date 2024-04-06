import Comment from '@/asset/icon/comment.svg'
import Date from '@/asset/icon/date.svg'
import Folder from '@/asset/icon/folder.svg'
import IconTxt from '../html/IconTxt';
import React from 'react'
import Sport from '@/asset/img/sport.png';
import Sport2 from '@/asset/img/sport1.png';
import TitleDetail from '../html/TitleDetail';

function LeftSection() {
    return (
        <div className='flex flex-col gap-y-4'>
            <section className='bg-[--grayLight] rounded-[--radius] p-3 relative h-[604px]'>
                <h1 className='text-[30px] text-[--black] text-center'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                <img src={Sport.src} alt="Sport" className='absolute top-[20%] rounded-[--radius] left-[50px] w-[90%] ' />
            </section>

            <section className='w-full flex flex-row justify-center gap-x-20 mt-[3.5rem]'>
                <IconTxt icon={Date.src} txt='July 14 , 2022' />
                <IconTxt icon={Comment.src} txt='35' />
                <IconTxt icon={Folder.src} txt='Sport' />


            </section>

            <TitleDetail 
            detail=' Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass oil used to clean the natural wood found throughout the room, creating a relaxing atmosphere within the space.
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite.
        '
             title='Don’t wait. The purpose of our lives is to be happy!' />
           
            <div className="w-[80%] mx-auto">
                <img src={Sport2.src} alt="Sport2" className='rounded-[--radius]'/>
            </div>
            <TitleDetail 
            detail=' When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can experience the ever-changing undersea environment.
            Not only do visitors to a bed and breakfast get a unique perspective on the place they are visiting, they have options for special packages not available in other hotel settings. Bed and breakfasts can partner easily with local businesses for a smoothly organized and highly personalized vacation experience. The Fife and Drum Inn offers options such as the Historic Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance.
            Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to create a complete experience. For example, the Fife and Drum retains the colonial feel of the area in all its guest rooms. Special features include antique furnishings, elegant four poster beds in some guest rooms, as well folk art and artifacts from the restoration period of the historic area available for guests to enjoy. '
             title='Not how long, but how well you have lived is the main thing.' />
        </div>
    )
}

export default LeftSection