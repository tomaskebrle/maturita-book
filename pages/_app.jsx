import '../styles/globals.css';
import Navbar from "../components/Navbar"
import { Toaster } from "react-hot-toast"
import { UserContext } from "../lib/context"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase"
import {useUserData} from "@lib/hooks"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      <div className="bg-gray-50">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons"
            rel="stylesheet"></link>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </div>
    </UserContext.Provider>
  )
}

export default MyApp;
