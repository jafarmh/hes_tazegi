import * as React from 'react';

import Box from '@mui/material/Box';
import { Global } from '@emotion/react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import useRtlLtr from '@/app/hooks/RtlLtr';

const drawerBleeding = 56;

interface Props {
  isOpen:true|false,
  height?:string,
  changeOpen:Function,
  children:React.ReactNode,
  radius?:number,
  backgroundColor?:string,
  windows?: () => Window;
}
 

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--white)",
 // backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));


export default function DrawerBottom(props: Props) {
  const { windows ,
    isOpen=false,
    height="90vh",
    changeOpen,
    children,
    radius=18,
    backgroundColor=grey[100]
  } = props;

  const Root = styled('div')(({ theme }) => ({
    height:"auto",
     backgroundColor: backgroundColor,
       
  }));
  
  const [open, setOpen] = React.useState(false);
  const [width,setWidth]=React.useState("100%");
  const dir=useRtlLtr();

  const toggleDrawer = (newOpen: boolean) => () => {
    //setOpen(newOpen);
    changeOpen(newOpen);
  };

  React.useEffect(() => {
    setOpen(isOpen);
     if(window!==undefined){
       if(window.innerWidth>700){
        setWidth("55%");
      }
      if(window.innerWidth>1000){
        setWidth("40%");
      }
      if(window.innerWidth>1300){
        setWidth("30%");
      }
    }
  }, [isOpen])
  

  // This is used only for the example
  const container = windows !== undefined ? () => windows().document.body : undefined;

  return (
     <Root>
   
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: height,
           // height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
            width:width,
            margin:"auto",
         
          },
        }}
        
      />
      
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
   
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
          
        }}
      
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -20,
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            visibility: 'visible',
            right: 0,
            left: 0,
            //background:"white",
            padding:"1rem",
            direction:dir??"rtl",
            backgroundColor: "var(--grayDrawer)",
          }}
        >
          <div dir={dir} className="h-[90vh] mb-5 overflow-y-auto ">
          {/* <Puller /> */}
          {children}
          </div>
        </StyledBox>
        
      </SwipeableDrawer>
     
      </Root>
  );
}