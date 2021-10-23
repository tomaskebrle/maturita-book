import Loader from "../components/Loader"
import { auth, googleAuthProvider } from "../lib/firebase";
import toast from "react-hot-toast"
import {useState} from "react"
import { useContext } from 'react';
import { UserContext } from '@lib/context';
export default function LoginPage({ }) {
  const { user } = useContext(UserContext);
  
  return (
    <main className="grid place-items-center">
      <h1 className="text-center text-4xl my-8">
        Přihlásit se
      </h1>
      {user ? <SignOutButton /> : <SignInButton />}
    </main >
  )
}

// Sign in with Google
function SignInButton() {
  const [email, setEmail] = useState()

  const handleChange = event => {
    setEmail(event.target.value)
  }

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider)
      toast.success('Nyní jste příhlášení')
    } catch(e) {
      toast.error('Něco se pokazilo',e)
    }
  }
  return (
    <>
    <button className="bg-green-500 p-4 font-bold rounded-md m-2 text-white w-72 mb-16" onClick={signInWithGoogle}>
      Přihlásit se přes Google
    </button>
    <br />
    </>
  )
}

//Sign out with Google
function SignOutButton() {
  return (
    <button className="bg-green-500 p-4 font-bold rounded-md m-2 text-white " onClick={() => { auth.signOut() }}>
      Sign out
    </button>
  )
}
