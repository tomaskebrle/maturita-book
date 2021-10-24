import '../styles/globals.css';
import Navbar from "../components/Navbar"
import { Toaster } from "react-hot-toast"
import { UserContext } from "../lib/context"
import {useUserData} from "@lib/hooks"
import Footer from "../components/Footer"
import Head from "next/head"
import {analytics, perf} from "@lib/firebase"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  useEffect(() => {
    analytics();
    perf();
  }, [])

  return (
    <UserContext.Provider value={userData}>
      <div className="bg-gray-50">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons"
            rel="stylesheet"></link>
        </Head>
        <Navbar />
        <div className="min-h-scren">
          <Component {...pageProps} />
        </div>
        <Toaster />
        <div className="relative h-screen">
          <Footer/>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default MyApp;
