import * as React from 'react';

import { BlueLightBtn, DisableBtnLoadingBlue, OrangLightBtn } from './button/Btns';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import useRtlLtr from '@/app/hooks/RtlLtr';
import { useTheme } from '@mui/material/styles';

interface AgreeDialogProps {
    title: string,
    body: React.ReactNode,
    confirmTitle: string,
    rejectTitle: string,
    loading: boolean,
    id: string,
    confirmFunction: Function,
    rejectFunction: Function,
    open: boolean,
}

export default function ConfirmRejectDialog(props: AgreeDialogProps) {
    const { title, body, confirmTitle, rejectTitle, confirmFunction, rejectFunction, open, id, loading } = props

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dir = useRtlLtr()


    return (
        <div  >

            <Dialog
                //fullScreen
                open={open}
                aria-labelledby={id}
                disableEscapeKeyDown={true}
                itemID={id}
                dir={dir}
         
              
                
            >
                <div className='p-3 bg-[var(--grayAgree)]' >
                    <p className='text-base font-bold text-[var(--gray)] p-2' id={id}>
                        {title}
                    </p>
                    {/* <DialogContent sx={{ minWidth:250,marginBlock:0 }}>
                        <DialogContentText sx={{ color: "#ffffff9e" }}>
                            {body}
                        </DialogContentText>
                    </DialogContent> */}
                    <DialogActions sx={{ minWidth:250 ,marginBlock:0}}>
                        <div className='w-full flex flex-row gap-1'>
                            <DisableBtnLoadingBlue disabled={loading} loading={loading} click={confirmFunction} text={confirmTitle} />
                            <OrangLightBtn click={rejectFunction} text={rejectTitle} />
                        </div>


                    </DialogActions>
                </div>
            </Dialog>

        </div>
    );
}
