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
    } catch {
      toast.error('Něco se pokazilo')
    }
  }

    // Email link 
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'https://maturita-book.vercel.app',
      // This must be true.
      handleCodeInApp: true,
    };

    const signInWithEmailLink = async () => {
      console.log(email);
      try {
        auth.sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
        })
        toast.success('Nyní jste příhlášení')
      } catch {
        toast.error('Něco se pokazilo')
      }

  }

  return (
    <>
    <button className="bg-green-500 p-4 font-bold rounded-md m-2 text-white w-72 mb-16" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
    <br />
    <input type="email" className="rounded-md p-2 border-2 border-green-500 w-72 focus:outline-none" onChange={(e) => setEmail(e.target.value)}/>
    <button className="bg-green-500 p-4 font-bold rounded-md m-2 text-white w-72 mb-16" onClick={signInWithEmailLink}>
      Sign in with Email link
    </button>
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
