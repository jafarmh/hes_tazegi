import { CircularProgress } from '@mui/material'
import Style from '@/asset/css/Loader.module.css'

export default function Loader(props: { width?: string, height?: string, borderTop?: string }) {
    const { width = "30px", height = "30px", borderTop = "2px" } = props

    return <>
        <div className='flex flex-row justify-center items-center w-full h-full'>
            <CircularProgress />
            {/* <div className={Style.loader} style={{ width: width, height: height, borderTop: `${borderTop} solid #3498db` }}></div> */}
        </div>
    </>
}