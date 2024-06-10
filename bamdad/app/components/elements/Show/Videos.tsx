import React, { useEffect, useRef, useState } from 'react'

import { AttachProps } from '@/app/interface/Entity';
import Play from '@/asset/img/play.png'
import back from '@/asset/img/Back2.svg'
import fullScreen from '@/asset/img/fullScreen.svg'
import next from '@/asset/img/next2.svg'
import pause from '@/asset/img/pause.svg'
import playIcon from '@/asset/img/next2.svg';
import volume from '@/asset/img/volume.svg'
import volumeSlash from '@/asset/img/volumeSlash.svg'

export default function Videos({ item }: { item: AttachProps }) {
    const refs = useRef(null);
    const [plays, setPlays] = useState(false)
    const [sound, setSound] = useState(100)
    const [currentTimeS, setCurrentTimeS] = useState('0')
    const [currentTimeM, setCurrentTimeM] = useState('0')

    const [currentTotalTimeS, setCurrentTotalTimeS] = useState('0')
    const [currentTotalTimeM, setCurrentTotalTimeM] = useState('0')
    let timeOut: any;
    const openFullscreen = () => {
        //@ts-ignore
        if (refs?.current.requestFullscreen) {
            //@ts-ignore
            refs?.current.requestFullscreen();
            //@ts-ignore
        } else if (refs?.current.webkitRequestFullscreen) { /* Safari */
            //@ts-ignore
            refs?.current.webkitRequestFullscreen();
            //@ts-ignore
        } else if (refs?.current.msRequestFullscreen) { /* IE11 */
            //@ts-ignore
            refs?.current.msRequestFullscreen();
        }
    }

    useEffect(() => {
        if (refs.current !== null) {
            //@ts-ignore
            let total = refs.current.duration;
            if (total > 60) {
                let minute = (total / 60).toFixed(0)??"0";
                let second = (total % 60).toFixed(0)??"0";
                setCurrentTotalTimeM(minute);
                setCurrentTotalTimeS(second);

            } else {
                if(total>0)
                setCurrentTotalTimeS(total.toFixed(0).toString());
            }
        }
    }, [refs.current])

    const PlayStop = (id: string) => {

        if (!plays) {
            //@ts-ignore
            refs.current?.play();

        } else {
            //@ts-ignore
            refs.current?.pause();
        }
        setPlays(!plays);


    }

    const ChangeSound = (number: number) => {

        if (refs) {
            //@ts-ignore
            refs.current['volume'] = (number / 100);
            setSound(number);
        }
    }


    useEffect(() => {
        if (plays) {

            timeOut = setInterval(() => {
                ///@ts-ignore
                if (refs.current.duration <= refs.current.currentTim) {
                    clearInterval(timeOut);
                    return;
                }

                ///@ts-ignore
                let minute = (refs.current.currentTime / 60).toFixed(0);
                ///@ts-ignore
                let second = (refs.current.currentTime % 60).toFixed(0);
                setCurrentTimeS(second.toString())
                setCurrentTimeM(+minute >= 1 ? minute.toString() : "0")
            }, 1000);
        } else {

            clearInterval(timeOut);

        }

        return () => clearInterval(timeOut);
    }, [plays])

    const Ended = () => {
        clearInterval(timeOut);
        setPlays(false);

        setCurrentTimeS('0');
        setCurrentTimeM('0');
    }

    return (
        <>
            <div className="w-full relative">
                {!plays && <div
                    className='z-10 cursor-pointer absolute top-[50%] right-[50%] translate-y-[-40px] translate-x-[40px]'
                    onClick={() => PlayStop(item.id.toString())}
                >
                    <img
                        src={Play.src}
                        alt="play"
                        className=' w-20 h-2w-20 ' />
                </div>}
                <video
                    ref={refs}
                    onEnded={() => Ended()}
                    className='rounded-xl' style={{ width: '100%', height: '100%' }}>
                    <source src={item.path} type="video/mp4" />

                </video>

                <div dir='rtl' className="absolute bottom-[-45px] right-0 w-full z-10 bg-[#262626]">
                    <div className="flex flex-row p-4 items-center">
                        <div className='flex-grow flex flex-row'>
                            <div onClick={() => openFullscreen()} className='cursor-pointer'>
                                <img className='w-4 h-4' src={fullScreen.src} />
                            </div>
                            <div className='flex flex-row ms-2'>
                                <div className='text-white text-sm'><small>{currentTotalTimeM}:{currentTotalTimeS}</small></div>
                                <div className='text-white text-sm'><small> / </small></div>
                                <div className='text-white text-sm'><small>{currentTimeM}:{currentTimeS}</small></div>

                            </div>
                        </div>
                        <div className='flex flex-row  items-center '>
                            <div className='flex flex-row w-[50px] h-[3px]'>

                                <div onClick={() => ChangeSound(100)} className={`cursor-pointer w-[33%] bg-[${sound > 90 ? "var(--blueColor)" : "var(--gray)"}]`}>
                                </div>
                                <div onClick={() => ChangeSound(70)} className={`cursor-pointer w-[33%] bg-[${sound > 60 ? "var(--blueColor)" : "var(--gray)"}]`}>
                                </div>
                                <div onClick={() => ChangeSound(34)} className={`cursor-pointer w-[32%] bg-[${sound > 30 ? "var(--blueColor)" : "var(--gray)"}]`}>
                                </div>
                            
                            </div>
                            <div onClick={() => ChangeSound(sound>0?0:100)} className="cursor-pointer">
                               {sound>0&& <img className='w-4 h-4' src={volume.src} alt="volume" />}
                               {sound<=0&&<img className='w-4 h-4' src={volumeSlash.src} alt="volume" />}
                            </div>
                            <div className='cursor-pointer ms-2'><img className='w-4 h-4' src={next.src} /></div>
                            <div className='cursor-pointer'><img className='w-4 h-4' src={back.src} /></div>
                            <div className='cursor-pointer' onClick={() => PlayStop(item.id.toString())}>
                                <img className='w-4 h-4 ms-2' src={plays ? pause.src : playIcon.src} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
