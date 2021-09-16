import '../styles/globals.css';
import Navbar from "../components/Navbar"
import { Toaster } from "react-hot-toast"
import { UserContext } from "../lib/context"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp;
