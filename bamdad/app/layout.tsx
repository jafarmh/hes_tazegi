import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

import { Inter } from 'next/font/google'
import { Providers } from './redux/Providers'
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'افق قصران',
  description: 'وب سایت خبری افق قصران',
  themeColor: "#FE590A"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body  className={inter.className} >
        <ToastContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
