"use client"
import React from "react";
import '@/style/globals.css'
import '@/style/main.scss'
import { usePathname, useRouter } from 'next/navigation'; 
import MenuBar from '@/components/MenuBar/';
import AppBarLayout from '@/components/AppBar/';
import { ContextProvider } from '@/context/ContextProvider';
import { JwtAuthContextProvider } from '@/context/JwtAuthContextProvider';
import Appwrap from '@/components/Wrapper/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "@/data/store";
import { redirect } from 'next/navigation'
import UserInfo from "@/data/UserInfo";
// export const metadata = {
//   title: 'My Portfolio',
//   description: 'Developed by next js',
// };

export default function RootLayout({ children }) {
  
  const pathname = usePathname()
  //const router = useRouter()
  const isNotLoggedIn = pathname === '/Portfolio' || pathname === '/';
  const isAuthPage = pathname === '/login' || pathname === '/register';
  
  //const isDashboardPage1 = typeof window !== 'undefined' && window.location.pathname.startsWith('/Portfolio');
   // Redirect to the login page if the pathname is not allowed
  //  if (!(isNotLoggedIn || isAuthPage)) {
  //   redirect('/login'); // Redirect to the login page
  // }
  return (
    
<ContextProvider>
  <JwtAuthContextProvider>
  <Provider store={store}>
    <html lang="en">
        <body>
          <UserInfo/>
          {isNotLoggedIn && (
            <AppBarLayout>
              <main className='dark:bg-gray-800'>
                {children}      {/* only TopNavBar specific layout for Not loggined pages */}
              </main>
            </AppBarLayout>
          )}
          {isAuthPage && (
            <main>
              {children} {/* No specific layout for authentication pages */}
            </main>
          )}
          {!isNotLoggedIn && !isAuthPage && (
            <MenuBar>
              <main className='p-6'>
                {children}  {/* only sidebar or drawer specific layout for loggined pages */}
              </main>
            </MenuBar>
          )}
        <ToastContainer />
        </body>
    </html>
    </Provider>
  </JwtAuthContextProvider>
</ContextProvider>

  );
}
