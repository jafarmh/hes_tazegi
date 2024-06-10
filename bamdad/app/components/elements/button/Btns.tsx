import Loader from '../Loader';
import React from 'react'

interface BtnProps {
    text: string,
    click: Function,
    icon?: React.ReactNode
    height?:string;
    type?: "button" | "submit" | "reset" | undefined,
}

interface BtnDisableProps {
    text: string,
    click: Function,
    icon?: React.ReactNode,
    disabled: boolean,
    loading: boolean,
    type?: "button" | "submit" | "reset" | undefined,
}

interface BtnPropsWithoutText {
    click: Function,
    icon?: React.ReactNode
}

export function OrangLightBtn(props: BtnProps) {
    const { text, click, icon } = props
    return (
        <button onClick={() => click()} className='bg-[var(--lightOrang)] p-4 rounded-lg w-full flex flex-row justify-center gap-x-2 items-center'>
            <b className='text-[var(--orang)]' >{text}</b><span>{icon}</span>
        </button>
    )
}


export function BlueLightBtn(props: BtnProps) {
    const { text, click, icon, type = "button"  } = props
    return (
        <button type={type} onClick={() => click()} className='bg-[var(--lightBlue)] p-4 rounded-lg w-full flex flex-row justify-center gap-x-2 items-center'>
            <b className='text-[var(--blue)]' >{text}</b><span>{icon}</span>
        </button>
    )
}


export function BlueBtn(props: BtnProps) {
    const { text, click, icon, type = "button",height=""  } = props
    return (
        <button type={type} onClick={() => click()} className='bg-[var(--blueColor)] p-4 rounded-lg w-full flex flex-row justify-center gap-x-2 items-center'>
            <b className={`text-[var(--blue)] ${height}`} >{text}</b><span>{icon}</span>
        </button>
    )
}

export function BlueBtnLoading(props: BtnProps) {
    const { text, click, icon, type = "button",height=""  } = props
    return (
        <button type={type} onClick={() => click()} 
        className='bg-[var(--blueColor)] p-4   flex flex-row justify-center gap-x-2 items-center w-10 h-10 text-white rounded-[50%]'>
            <span>{icon}</span>
        </button>
    )
}

export function BlueLightWithoutTxtBtn(props: BtnPropsWithoutText) {
    const { click, icon } = props
    return (
        <button onClick={() => click()} className='bg-[var(--lightBlue)] p-4 rounded-lg w-full flex flex-row justify-center gap-x-2 items-center'>
            <span>{icon}</span>
        </button>
    )
}

export function BlueGradinBtn(props: BtnProps) {
    const { text, click, icon } = props
    return (
        <button onClick={() => click()} className='w-full bg-gradient-to-r p-[1.16rem] rounded-xl from-[var(--blueColor)] via-[var(--blueColor)] to-[var(--blue)]'>
            <b className='text-sm text-white'>{text} </b> <span>{icon}</span>
        </button>

    )
}

export function DisableBtn(props: BtnProps) {
    const { text, click, icon, type = "button" } = props
    return (
        <button type={type} className='bg-[var(--grayDisable)] p-4 rounded-lg w-full flex flex-row justify-center gap-x-2 items-center'>
            <b className='text-white' >{text}</b><span>{icon}</span>
        </button>
    )
}

export function DisableBtnLoadingBlue(props: BtnDisableProps) {
    const { text, click, icon, disabled, loading, type = "button" } = props
    
    return (
        <>{disabled ?
            <Loader />
            // <DisableBtn type='button' click={click} text={loading ? "لطفا صبر نمایید...." : text} /> 
            :
            <BlueLightBtn type={type} click={click} text={text}  icon={icon??""}/>
        }
        </>
    )
}

 

export function DisableBtnLoadingBlueDark(props: BtnDisableProps) {
    const { text, click, icon, disabled, loading, type = "button" } = props
    return (
        <>{disabled ?
            <Loader />
           // <DisableBtn type='button' click={click} text={loading ? "لطفا صبر نمایید...." : text} /> 
            :
            <BlueBtn type={type} click={click} text={text}  icon={icon??""}/>
        }
        </>
    )
}
export function DisableBtnLoadingBlueGradin(props: BtnDisableProps) {
    const { text, click, icon, disabled, loading, type = "button" } = props
    return (
        <>{disabled ?
            <Loader />
            // <DisableBtn type='button' click={click} text={loading ? "لطفا صبر نمایید...." : text} /> 
            :
            <BlueGradinBtn type={type} click={click} text={text} />
        }
        </>
    )
}

export function DisableBtnLoadingBlueDarkMore(props: BtnDisableProps) {
    const { text, click, icon, disabled, loading, type = "button" } = props
    return (
        <>{disabled ?
            <Loader />
            // <DisableBtn type='button' click={click} text={loading ? "لطفا صبر نمایید...." : text} /> 
            :
            <BlueBtnLoading  type={type} click={click} text={text}  icon={icon??""}/>
        }
        </>
    )
}