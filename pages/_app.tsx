import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout'
import {AppContext} from '../context/context';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

  return(
    <AppContext.Provider value={{
        isAuthenticated, setIsAuthenticated
    }}>
        <Layout>
        <Component {...pageProps} />
        </Layout> 
    </AppContext.Provider>
  )
}

export default MyApp
