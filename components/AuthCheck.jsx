import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '@lib/context';
// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { user } = useContext(UserContext);

  return(
    user ? props.children : props.fallback || <div className="bg-green-700 p-4 rounded-md text-white uppercase font-bold"><Link href="/login">Musíte být přihlášeni</Link></div>
  )
}
