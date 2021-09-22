import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../lib/firebase"

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <nav className="flex p-4">
      <ul className="flex w-full">
        <Link href="/">
          <li className="logo bg-green-700 p-4 rounded-md text-white font-bold cursor-pointer">
            MATURITA KNÍŽKY
          </li>
        </Link>
        <div className="flex-grow"></div>
        {user && (
          <Link href="/login" className="cursor-pointer">
            <li className="flex bg-gray-200 rounded-md p-1">
              <img className="rounded-full w-12 h-12" src={user.photoURL}></img>
              <div className="align-middle inline-block">
                <div className="font-bold text-lg py-2.5 mx-2">
                  {user.displayName}
                </div>
              </div>
            </li>
          </Link>
        )}
        {!user && (
          <li className="flex-initial bg-green-700 bg-opacity-75 p-2 m-2 rounded-md text-white font-bold cursor-pointer">
            <Link href="/login">LOG IN</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
