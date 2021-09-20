import Loader from "../components/Loader"
import { auth, googleAuthProvider } from "../lib/firebase";
import toast from "react-hot-toast"

export default function LoginPage({ }) {
  const user = null;
  const username = null;
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
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider)
      toast.success('Nyní jste příhlášení')
    } catch {
      toast.error('Něco se pokazilo')
    }

  }

  return (
    <button className="bg-green-500 p-4 font-bold rounded-md m-2 text-white" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  )
}

//Sign out with Google
function SignOutButton() {
  return (
    <button className="bg-green-500 p-4 font-bold rounded-md m-2 text-white" onClick={() => { auth.signOut() }}>
      Sign out
    </button>
  )
}